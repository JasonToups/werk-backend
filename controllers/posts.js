/* ------ IMPORTS ------ */
const db = require('../models');
// import "../middleware/formatter";

/* ------ CONTROLLERS ------ */

// test
const test = (request, response) => {
  response.json({ message: 'Test' });
};

// index
const index = (request, response) => {
  db.Post.find({}, (error, allPosts) => {
    if (error) {
      // ALWAYS RETURN TO EXIT
      return response.error(500, 'Something went wrong.');
    }
    //TODO Ask Dalton about how to use formatter.js to handle the responses.
    // uses formatter.js function
    // response.success(200, allPosts);
    const resObj = {
      data: allPosts,
      requestedAt: new Date().toLocaleString()
    };
    return response.json({ resObj });
  });
};

// create
const create = ('/', (request, response) => {
  db.Post.create(request.body, (error, createdPost) => {
    if (error) {
      return response
        .status(500)
        .json({ message: 'Something went wrong.', error: error });
    }
    const responseObj = {
      status: 200,
      data: createdPost,
      requestedAt: new Date().toLocaleString()
    };
    response.status(200).json(responseObj);
  });
});

// Show
const get = ('/:id', (request, response) => {
  db.Post.findById(request.params.id, (error, foundPost) => {
    if (error) {
      // ALWAYS RETURN TO EXIT
      return response
        .status(500)
        .json({ message: 'Something went wrong.', error: error });
    }
    const responseObj = {
      status: 200,
      data: foundPost,
      requestedAt: new Date().toLocaleString()
    };
    response.status(200).json(responseObj);
  });
});

// Update
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

// Delete
const destroy = ('/:id', (request, response) => {
  db.Post.findByIdAndDelete(request.params.id, (error, deletedPost) => {
    if (error) {
      return response
        .status(500)
        .json({ message: 'Something went wrong.', error: error });
    }
    const responseObj = {
      status: 200,
      data: deletedPost,
      requestedAt: new Date().toLocaleString()
    };
    response.status(200).json(responseObj);
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