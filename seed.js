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
  gigAppearanceFee: 250,
  gigPerformanceFee: 175,
  gigRequirementDescription: "I must be picked up from the airport in an Uber Black. I want 3 ice cold Topo Chico bottles in my dressing room. And I need 3 hours to apply my makeup, and I can't be disturbed during this time."
}

const newGig = {
  queen_submitted_to: "Dolly Levi",
  user_submitted_from: "5e64130153bb7e6ed5429aaa",
  name: "Before The Parade Passes By",
  address: "1234 Yonkers Way, NY, NY",
  date_of_gig: "2020-03-07T21:32:49.701+00:00",
  cost: 17000,
  visibility: true,
  approval: true
}

const newPost = {
  user_submitted_from: "5e64130153bb7e6ed5429aaa",
  name: "Oasis Lounge Tonight",
  description: "Come out to my weekly at Oasis, you'll gag on this gig, Hinny.",
  image: "https://res-2.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1532471421/event-poster-9704379.jpg",
  likes: 17
}

db.User.create(newUser, (err, savedUser) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new user: ${savedUser}`);
});

db.Gig.create(newGig, (err, savedGig) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new gig: ${savedGig}`);
});

db.Post.create(newPost, (err, savedPost) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new post: ${savedPost}`);
});