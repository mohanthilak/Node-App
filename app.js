const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Node app running with NGINX</h1>");
});

app.listen(4000, () => console.log("App listening at Port 4000"));
