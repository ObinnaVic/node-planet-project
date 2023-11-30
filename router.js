const http = require("http");

const friends = [
  {
    id: 1,
    firstName: "Sam",
    lastName: "James",
  },
  {
    id: 2,
    firstName: "Teri",
    lastName: "Danny",
  },
  {
    id: 3,
    firstName: "Emma",
    lastName: "Samson",
  },
  {
    id: 4,
    firstName: "Victor",
    lastName: "Nkire",
  },
];

const server = http.createServer((req, res) => {
  //This is done to route between pages on the web application.

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.method === "GET" && req.url === "/friends") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(friends));
  } else if (req.method === "POST" && req.url === "/friends") {
    req.on("data", (data) => {
      let newFriend = data.toString();
      console.log(`Added ${newFriend} to the friends array`);
      friends.push(JSON.parse(newFriend));
    });
    req.pipe(res); //  This is to send back the data added to the friends array as a response back to the user.
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server listening to port 4000");
});
