const express = require("express");
const morgan = require("morgan");
const application = express();

application.use(express.json());
application.use(morgan("dev"));

application.listen(3000, () => {
  console.log("Listening On Port 3000");
});

function handleRootRequest(request, response) {
  response.json({ message: "Api is working" });
}

function sendStudents(request, response) {
  response.json({ message: "Api is working" });
}

application.get("/", handleRootRequest);
application.get("/students", sendStudents);
