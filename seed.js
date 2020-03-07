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

db.User.create(newUser, (err, savedUser) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new user: ${savedUser}`);
});