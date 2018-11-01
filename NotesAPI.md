# Lambda Notes API 

- A server that will deliver notes to the user from this [url](https://lambda-notes-board.herokuapp.com/).

- The notes in the server are viewable to anyone using the server. Therefore, any notes that you write will be viewable to 
everyone using the server.

- Basic format of the notes:
```js
{
  "title": "Note Title",
  "textBody": "Note Body"
}
```
-There is an "_id" attribute provided by the server, which is just a number that will be returned as part of the data.

## GET

### https://lambda-notes-board.herokuapp.com/api/notes

a 'GET' request to this route will return all of the notes.

### https://lambda-notes-board.herokuapp.com/api/notes/id

a 'GET' request to this route with the id being the note ID will return the note.

## POST

### https://lambda-notes-board.herokuapp.com/api/notes

a 'POST' request to this route with the title and textBody in the req.body will create a new note in the server.
The response will be a message saying "Note created" and it will return the "_id" for the note created.

## DELETE

### https://lambda-notes-board.herokuapp.com/api/notes/id

a 'DELETE' request to this route with the id being the note ID will delelte the note.
The response will be a message saying "Note Deleted".

## PUT

### https://lambda-notes-board.herokuapp.com/api/notes/id

a 'PUT' request to this route with the id being the note ID and a title and textBody in the req.body will edit the note in the server. 
The response will be a message saying "Note edited" and the edited note.

