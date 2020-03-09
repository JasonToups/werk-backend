const db = require('../models');

// index
const index = (request, response) => {
  db.User.find({}, (error, allUsers) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, allUsers);
  });
};

// show
const showUser = (request, response) => {
  db.User.findById(request.params.id, (error, foundUser) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, foundUser);
  });
}

// update
const updateUser = (request, response) => {
  db.User.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, updatedUser) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, updatedUser);
  });
};

module.exports = {
  index,
  showUser,
  updateUser,
}