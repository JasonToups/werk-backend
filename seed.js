//seed.js
const db = require('./models');

// const newUser = {
//   userType: "Queen",
//   name: "Dolly Levi",
//   email: "hello@dolly.com",
//   password: "1234",
//   userImage: "https://www.theatermania.com/s/tm-photos-production/138174.jpg",
//   homeCity: "Yonkers",
//   tips: 1234,
//   gigAppearanceFee: 250,
//   gigPerformanceFee: 175,
//   gigRequirementDescription: "I must be picked up from the airport in an Uber Black. I want 3 ice cold Topo Chico bottles in my dressing room. And I need 3 hours to apply my makeup, and I can't be disturbed during this time."
// }

// const newGig = {
//   queen_submitted_to: "Dolly Levi",
//   user_submitted_from: "5e64130153bb7e6ed5429aaa",
//   name: "Before The Parade Passes By",
//   address: "1234 Yonkers Way, NY, NY",
//   date_of_gig: "2020-03-07T21:32:49.701+00:00",
//   cost: 17000,
//   visibility: true,
//   approval: true
// }

// TODO create array, and then for each throuh array to create new Posts
const newPost = [
  {
    user_submitted_from: "5e67db31416f0e07fe823c98",
    name: "Louisianna Purchase",
    description: "Come see the queens compete in the Superbowl of Drag.",
    image: "https://i.imgur.com/kV6sJQr.jpg",
    likes: 94
  },
  {
    user_submitted_from: "5e67dc6a416f0e07fe823c9f",
    name: "Lady Bunny",
    description: "The living history of drag performs.",
    image: "https://i.imgur.com/Iic6WPI.jpg",
    likes: 824
  },
  {
    user_submitted_from: "5e67dc8a416f0e07fe823ca0",
    name: "Karen from Finance",
    description: "No, I won't do your taxes.",
    image: "https://i.imgur.com/ue5d4j0.jpg",
    likes: 327
  },
  {
    user_submitted_from: "5e67dca0416f0e07fe823ca1",
    name: "Divine",
    description: "All my life I wanted to look like Elizabeth Taylor. Now Elizabeth Taylor looks like me.",
    image: "https://s31242.pcdn.co/wp-content/uploads/2019/06/Divine-2.jpg",
    likes: 497
  },
  {
    user_submitted_from: "5e67dcbc416f0e07fe823ca2",
    name: "Trixie Mattel",
    description: "Have you seen my award-winning documentary, Moving Parts?",
    image: "https://i.imgur.com/Ar1jKCX.png",
    likes: 583
  },
  {
    user_submitted_from: "5e67dcf0416f0e07fe823ca3",
    name: "Katya Zamolodchikova",
    description: "Just what I thought, trash.",
    image: "https://i.imgur.com/zlnteDF.jpg",
    likes: 148
  },
  {
    user_submitted_from: "5e67dd1c416f0e07fe823ca4",
    name: "Mayhem Miller",
    description: "Come to the pageant, Henny!",
    image: "https://i.imgur.com/zYVgl0E.jpg",
    likes: 56
  },
  {
    user_submitted_from: "5e67dd38416f0e07fe823ca5",
    name: "Bob the Drag Queen",
    description: "Head to my event, purse first.",
    image: "https://i.imgur.com/7fEthDk.jpg",
    likes: 125
  },
  {
    user_submitted_from: "5e67dd62416f0e07fe823ca6",
    name: "Detox",
    description: "Gag on the eleganza.",
    image: "https://i.imgur.com/oZNR5CH.jpg",
    likes: 28
  },
  {
    user_submitted_from: "5e67dd7d416f0e07fe823ca7",
    name: "Tammie Brown",
    description: "20 years in the biz, and still serving.",
    image: "https://i.imgur.com/EGdrhbY.jpg",
    likes: 53
  },
  {
    user_submitted_from: "5e67dde6416f0e07fe823ca8",
    name: "Alaska",
    description: "Hiyeeeeeeeeeeee!",
    image: "https://i.imgur.com/vLYoyfO.jpg",
    likes: 72
  },
  {
    user_submitted_from: "5e67de09416f0e07fe823ca9",
    name: "RuPaul",
    description: "I've got one thing to say...",
    image: "https://i.imgur.com/2wal5aB.jpg",
    likes: 170
  },
  {
    user_submitted_from: "5e67de09416f0e07fe823ca9",
    name: "Sasha Velour",
    description: "Come see my avant garde art show, Nightgowns.",
    image: "https://i.imgur.com/UX4c4Oe.jpg",
    likes: 6
  },
  {
    user_submitted_from: "5e67f28408d439139ad2b70c",
    name: "Dame Edna",
    description: "Let's do the time warp again.",
    image: "https://i.imgur.com/3Wp3ZGG.jpg",
    likes: 1
  },
  {
    user_submitted_from: "5e67f2c308d439139ad2b70d",
    name: "Coco Peru",
    description: "Bring me a tension tamer tea.",
    image: "https://i.imgur.com/FdQM9HH.jpg",
    likes: 7
  },
  {
    user_submitted_from: "5e64130153bb7e6ed5429aaa",
    name: "Frank N Furter",
    description: "Come up to the lab, and see what's on the slab.",
    image: "https://i.imgur.com/wbCpWyW.jpg",
    likes: 20
  }
]

// db.User.create(newUser, (err, savedUser) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(`saved new user: ${savedUser}`);
// });

// db.Gig.create(newGig, (err, savedGig) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(`saved new gig: ${savedGig}`);
// });

// TODO I didn't need a for each loop. I could have just run this once. Now I have a ton of the same entries. I need to update the image links though. 

db.Post.create(newPost, (err, savedPost) => {
  if (err) {
    return console.log(err);
  }
  console.log(`saved new post: ${savedPost}`);
})
