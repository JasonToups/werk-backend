// -------- IMPORTS -------- //
// External Modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Instanced Modules
const app = express();

// Internal Modules
const db = require('./models');
const routes = require('./routes');
const utils = require('./middleware/utils');
const formatter = require('./middleware/formatter');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// -------- MIDDLEWARE -------- //
// formats request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// logger
app.use(utils.logger);
// response formatter
app.use(formatter);

const corsOptions = {
	origin: [
		'http://localhost:3000',
		'http://localhost:4000',
		'https://werk.herokuapp.com',
		'http://werk.herokuapp.com',
		'https://jasontoups.github.io',
		'http://jasontoups.github.io',
	],
	credentials: true,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

/* Express Session Auth */
app.use(
	session({
		store: new MongoStore({ url: process.env.MONGODB_URI }),
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 3, // Expire in 3 hours
		},
	}),
);

/* AWS Presigner */
const {
	generateGetUrl,
	generatePutUrl,
} = require('./controllers/awsPresigner');

// GET URL
app.get('/api/v1/aws/generate-get-url', (req, res) => {
	// Both Key and ContentType are defined in the client side.
	// Key refers to the remote name of the file.
	const { Key } = req.query;
	generateGetUrl(Key)
		.then(getURL => {
			res.send(getURL);
		})
		.catch(err => {
			res.send(err);
		});
});

// PUT URL
app.get('/api/v1/aws/generate-put-url', (req, res) => {
	// Both Key and ContentType are defined in the client side.
	// Key refers to the remote name of the file.
	// ContentType refers to the MIME content type, in this case image/jpeg
	const { Key, ContentType } = req.query;
	generatePutUrl(Key, ContentType)
		.then(putURL => {
			res.send({ putURL });
		})
		.catch(err => {
			res.send(err);
		});
});

// -------- API ROUTES -------- //

// Auth
app.use('/api/v1/auth', routes.auth);
// Users
app.use('/api/v1/users', routes.user);
// Posts
app.use('/api/v1/posts', routes.post);
// Gigs
app.use('/api/v1/gigs', routes.gig);
// AWS
// app.use('/api/v1/aws', routes.aws);

// 405 middleware
app.use('/api/v1/*', utils.methodNotAllowed);

// ---- 404 Route
app.get('/*', utils.notFound);

// -------- START SERVER -------- //
app.listen(PORT, () => {
	console.log(`Server is listening on Port ${PORT}`);
});
