const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available Routes

app.use("/nickname", require("./routes/nickname"));
app.use("/activity",require("./routes/Activity"));
app.use("/struggle",require("./routes/struggle"));
app.use("/sleeptime",require("./routes/sleeptime"));
app.use("/wakeup",require("./routes/wakeup"));
app.use("/hoursneeded",require("./routes/sleepneeded"));

app.get("/", (req, res) => {
  res.send("Hello Keshav Sharma is building REST Api");
});

app.listen(port, () => {
  console.log(`Wysa app listening on port ${port}`);
});