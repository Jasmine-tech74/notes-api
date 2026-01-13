const express = require("express");
const app = express();
const port = 3000;

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: "4",
    content: "Javascript is a programming language",
    important: true,
  },
  {
    id: "5",
    content: "React is a backend framework",
    important: false,
  },
  {
    id: "6",
    content: "HTML is hard",
    important: false,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  res.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
