/* ------ IMPORTS ------ */
const db = require('../models');

/* ------ CONTROLLERS ------ */

// test
const test = (request, response) => {
  response.json({ message: 'Test' });
};

// index
const index = (request, response) => {
  db.Gig.find({}, (error, allGigs) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, allGigs);
  });
};

// create
const create = ('/', (request, response) => {
  db.Gig.create(request.body, (error, createdGig) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, createdGig);
  });
});

// Show
const get = ('/:id', (request, response) => {
  db.Gig.findById(request.params.id, (error, foundGig) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, foundGig);
  });
});

// Update
// TODO BUG - Cannot Put in Insomnia.
const put = ('/:id', (request, response) => {
  db.Gig.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true },
    (error, updatedGig) => {
      if (error) {
        // ALWAYS RETURN TO EXIT
        return response
          .status(500)
          .json({ message: 'Something went wrong.', error: error });
      }
      const responseObj = {
        status: 200,
        data: updatedGig,
        requestedAt: new Date().toLocaleString()
      };
      response.status(200).json(responseObj);
    }
  );
});
// const put = ('/:id', (request, response) => {
//   db.Gig.findByIdAndUpdate(
//     request.params.id,
//     request.body,
//     { new: true },
//     (error, updatedGig) => {
//       if (error) {
//         return response.error(500, 'Something went wrong.');
//       }
//       response.success(200, updatedGig);
//     });
// });

// Delete
const destroy = ('/:id', (request, response) => {
  db.Gig.findByIdAndDelete(request.params.id, (error, deletedGig) => {
    if (error) {
      return response.error(500, 'Something went wrong.');
    }
    response.success(200, deletedGig);
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