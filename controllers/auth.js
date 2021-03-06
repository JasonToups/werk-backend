const bcrypt = require('bcryptjs');
const db = require('../models');

/* Post Register - Create new User */
const register = (request, response) => {
  db.User.findOne({ email: request.body.email }, (error, foundUser) => {
    if (error) {
      return response.error(500, 'Something went wrong.')
    }
    // Checking if account already exists
    if (foundUser) {
      return response.status(400).json({
        status: 400,
        message: 'Email already exists. Try another.'
      });
    }
    // Generating Salt
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        return response.error(500, 'Something went salty.')
      }
      // Hashing the User Password
      bcrypt.hash(request.body.password, salt, (error, hash) => {
        if (error) {
          return response.error(500, 'Something went hashy.')
        }

        const newUser = {
          userType: request.body.userType,
          name: request.body.name,
          email: request.body.email,
          password: hash,
        }
        db.User.create(newUser, (error, createdUser) => {
          if (error) {
            return response.error(500, 'Could not create.')
          }
          response.sendStatus(201);
        })
      })
    })
  })
}

/* Post Login - Check if User Matches credentials */
const login = (request, response) => {
  db.User.findOne({ email: request.body.email }, (error, foundUser) => {
    if (error) {
      return response.error(500, 'Something went wrong.')
    }
    if (!foundUser) {
      return response
        .status(400)
        .json({
          message: 'User does not exist'
        })
    }
    bcrypt.compare(request.body.password, foundUser.password, (error, isMatch) => {
      if (error) {
        return response.error(500, 'Something went wrong.')
      }
      if (isMatch) {
        request.session.currentUser = {
          id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email
        };
        const responseObj = {
          status: 200,
          data: foundUser._id,
          requestedAt: new Date().toLocaleString(),
          message: 'Success',
        }
        return response
          .status(200)
          .json(responseObj)
      } else {
        return response
          .status(400)
          .json({ message: 'Username/password is incorrect' })
      }
    })
  })
}

/* Get - Verify session of logged in User */
const verify = (request, response) => {
  if (!request.session.currentUser) {
    return response
      .status(401)
      .json({ message: 'Unauthorized' })
  }
  response
    .status(200)
    .json({ message: `Current user verified. User ID: ${request.session.currentUser.id}` })
}

/* Delete - Delete Session */
const logout = (request, response) => {
  if (!request.session.currentUser)
    return response
      .status(401)
      .json({
        messsage: 'Unauthorized'
      })
      .json({ request })
      .json({ reponse })
  request.session.destroy(error => {
    if (error) {
      // Original
      // return response.error(500, 'Something went wrong.');
      // Debugging
      return response.status(400).json({ err });
    }
    response.sendStatus(200);
  })
};

module.exports = {
  register,
  login,
  verify,
  logout,
}