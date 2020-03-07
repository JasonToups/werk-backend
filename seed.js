//seed.js
const db = require('./models');

const newUser = {
  userType: "Queen",
  name: "Dolly Levi",
  email: "hello@dolly.com",
  password: "1234",
  userImage: "https://www.theatermania.com/s/tm-photos-production/138174.jpg",
  homeCity: "Yonkers",
  tips: 1234,
}

db.User.create(newUser, (err, savedUser) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new user: ${savedUser}`);
});