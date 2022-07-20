const http = require("http");

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(notes));
});
const PORT = 3000;
app.listen(PORT);
console.log(`Server running on por ${PORT}`);
