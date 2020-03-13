/* ------ IMPORTS ------ */
const db = require('../models');

/* ------ CONTROLLERS ------ */

// test
const test = (request, response) => {
  response.json({ message: 'Test' });
};

// index
const index = (request, response) => {
  db.Post.find({}, (error, allPosts) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, allPosts);
  });
};

// create
const create = ('/', (request, response) => {
  db.Post.create(request.body, (error, createdPost) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, createdPost);
  });
});

// Show
const get = ('/:id', (request, response) => {
  db.Post.findById(request.params.id, (error, foundPost) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, foundPost);
  });
});

// Update
// TODO BUG - Cannot Put in Insomnia.
const put = ('/:id', (request, response) => {
  db.Post.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true },
    (error, updatedPost) => {
      if (error) {
        return response
          .status(500)
          .json({ message: 'Something went wrong.', error: error });
      }
      const responseObj = {
        status: 200,
        data: updatedPost,
        requestedAt: new Date().toLocaleString()
      };
      response.status(200).json(responseObj);
    }
  );
});
// const put = ('/:id', (request, response) => {
//   db.Post.findByIdAndUpdate(
//     request.params.id,
//     request.body,
//     { new: true },
//     (error, updatedPost) => {
//       if (error) {
//         return response.error(500, 'Something went wrong.');
//       }
//       response.success(200, updatedPost);
//     });
// });

// Delete
const destroy = ('/:id', (request, response) => {
  db.Post.findByIdAndDelete(request.params.id, (error, deletedPost) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, deletedPost);
  });
});

module.exports = {
  test,
  index,
  create,
  get,
  put,
  destroy
}