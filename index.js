const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const projectmodel = require("./models/project");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jayaprakash8300:Rc6zSzk2KY5zffeC@polymersearchclone.n3e6iqh.mongodb.net/polymersearchclone?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get("/getprojects", async (req, res) => {
  const allProjects = await projectmodel.find();
  res.status(200).send({ status: "Success", data: allProjects });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
