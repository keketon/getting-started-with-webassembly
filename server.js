const express = require("express");
const app = express();

app.use(
  express.static("public", {
    // Not required for the current version of the express but added for my learning
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".wasm")) {
        res.set("Content-Type", "application/wasm");
      }
    },
  })
);

app.listen(2222, () => console.log("Server started on port 2222!"));
