exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        {
          title: 'Lalalala',
          textBody: 'I love daft punk',
        },
        {
          title: 'test',
          textBody: 'Is this working?',
        },
        {
          title: 'Knock, Knock',
          textBody:
            'Who is there? \n Cows go \n Cows go who? \n No cows go moo.',
        },
        {
          title: 'Hi',
          textBody: "What's up?",
        },
      ]);
    });
};
