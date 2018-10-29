exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        {
          _id: '1',
          title: 'Lalalala',
          textBody: 'I love daft punk',
        },
        {
          _id: '2',
          title: 'test',
          textBody: 'Is this working?',
        },
        {
          _id: '3',
          title: 'Knock, Knock',
          textBody:
            'Who is there? \n Cows go \n Cows go who? \n No cows go moo.',
        },
        {
          _id: '4',
          title: 'Hi',
          textBody: "What's up?",
        },
      ]);
    });
};
