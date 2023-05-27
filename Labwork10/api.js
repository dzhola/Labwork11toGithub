function fetchUsers() 
{
  return new Promise(resolve => {
    const users = [
      { firstname: 'Mark', lastname: 'Zuckerberg', score: 85 },
      { firstname: 'Johnny', lastname: 'Depp', score: 92 },
      { firstname: 'Will', lastname: 'Smith', score: 78 },
      { firstname: 'Angelina', lastname: 'Jolie', score: 87 },
      { firstname: 'Harry', lastname: 'Styles', score: 95 },
      { firstname: 'Elon', lastname: 'Musk', score: 81 },
      { firstname: 'Bill', lastname: 'Gates', score: 89 },
      { firstname: 'David', lastname: 'Copperfield', score: 76 },
      { firstname: 'Arnold', lastname: 'Schwarzenegger', score: 93 },
      { firstname: 'Jackie', lastname: 'Chan', score: 84 },
      { firstname: 'Robert', lastname: 'Pattinson', score: 90 },
      { firstname: 'Kristen', lastname: 'Stewart', score: 79 },
      { firstname: 'Jennifer', lastname: 'Aniston', score: 88 },
      { firstname: 'Mila', lastname: 'Kunis', score: 91 },
      { firstname: 'Anne', lastname: 'Hathaway', score: 82 },
      { firstname: 'Mark', lastname: 'Twain', score: 77 },
      { firstname: 'Theresa', lastname: 'May', score: 94 },
      { firstname: 'Charlize', lastname: 'Theron', score: 83 },
      { firstname: 'Calvin', lastname: 'Klein', score: 86 },
      { firstname: 'Leonardo', lastname: 'da Vinci', score: 80 }
    ];

    setTimeout(() => 
    {
      const randomUsers = [];
      for (let i = 0; i < 10; i++) 
      {
        const randomIndex = Math.floor(Math.random() * users.length);
        randomUsers.push(users[randomIndex]);
      }
      resolve(randomUsers);
    }, 1000);
  });
}

function getNewUsers() 
{
  return users.slice(0, 5);
}

export { fetchUsers, getNewUsers };