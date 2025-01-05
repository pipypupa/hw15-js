const users = [
    { name: 'Liam', balance: 12000, friend: 'Noah', skills: ['chess', 'running'] },
    { name: 'Emma', balance: 5500, friend: 'Olivia', skills: ['painting', 'cycling'] },
    { name: 'Ava', balance: 9300, friend: 'Sophia', skills: ['swimming', 'tennis'] },
    { name: 'Isabella', balance: 26000, friend: 'Olivia', skills: ['badminton', 'jogging'] },
    { name: 'Ethan', balance: 34000, friend: 'Sophia', skills: ['basketball', 'coding'] },
    { name: 'Charlotte', balance: 18200, friend: 'Sophia', skills: ['singing', 'guitar'] },
    { name: 'James', balance: 80200, friend: 'Henry', skills: ['gaming', 'dancing'] },
    { name: 'Henry', balance: 46000, friend: 'Amelia', skills: ['football', 'yoga'] },
];

// Завдання 1
const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log(totalBalance);

// Завдання 2
const friendName = 'Sophia';
const filteredUsers = users.filter((user) => user.friend === friendName);
console.log(filteredUsers.map((user) => user.name));

//  Завдання 3
const sortedUsers = [...users].sort((a, b) => a.friendsCount - b.friendsCount);
console.log(sortedUsers.map((user) => user.name)); 

// Завдання 4
const uniqueSkills = [...new Set(users.flatMap((user) => user.skills))].sort();
console.log(uniqueSkills); 