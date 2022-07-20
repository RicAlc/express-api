const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "Fly me to the moon and let me play among the stars...",
    date: "2022-05-30",
    important: true,
  },
  {
    id: 2,
    content: "Y que hay de mi? yo sigo aqui, yo tambien quiero ser feliz",
    date: "2028-08-18",
    important: true,
  },
  {
    id: 3,
    content: "Deep lil oso",
    date: "2020-01-12",
    important: false,
  },
];
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => id === note.id);
  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => id !== note.id);
  res.status(204).end();
});

app.post("/api/notes/", (req, res) => {
  const note = req.body;
  console.log(note);

  const ids = notes.map((note) => {
    return note.id;
  });
  const maxId = Math.max(...ids);
  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== "undefined" ? note.important : false,
    date: new Date().toISOString(),
  };
  notes = [...notes, newNote];
  res.json(newNote);
});

//  http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
