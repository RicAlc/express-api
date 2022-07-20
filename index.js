const express = require("express");
const PORT = 3000;
const app = express();

const notes = [
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

//  http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

app.listen(PORT, () => {
  console.log(`Server running on por ${PORT}`);
});
