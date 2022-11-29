const express = require("express");
const app = express;
const path = require("path");
const port = process.env.PORT || 5432;
const sslRedirect = require("heroku-ssl-redirect").default;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendfile(path.resolve(_dirname, "build", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port:", port);
});
