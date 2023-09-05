// Write code to get array of names from given array of users
// const names = users.map((user) => user.name);

// Only active users
// const names = users.filter((user) => user.isActive).map((user) => user.name);

// Sorted by age descending
// const names = users
//   .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
//   .filter((user) => user.isActive)
//   .map((user) => user.name);

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 100,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

console.log(names);
