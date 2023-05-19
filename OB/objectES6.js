const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
  marlene: {
    age: 24,
    email: "marlene@freeCodeCamp.com",
  },
};
const {
  johnDoe: { age, email },
} = user;
console.log(user);
