require("dotenv").config();

const { application } = require("./server");

application.listen(process.env.PORT || 3000, () => {
  console.log(`listening On Port ${process.env.PORT || 3000}`);
});

//create users 
//const handleErrors = require("./middlwares/error-handler");

// application.use(handleErrors);
// const { users } = require("./fakedata");
// const passwordHash = require("password-hash");
// const { User } = require("./models/user");

// let newUsers = users.map((user) => {
//   user.password = passwordHash.generate("123456789");
//   return user;
// });

// console.log(newUsers);

// User.create(newUsers).then(r=> console.log(r))
// console.log(newUsers);
