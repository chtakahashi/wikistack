const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const users = require('./routes/users')
const wiki = require('./routes/wiki')
const bodyParser = require("body-parser");
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("./views/index");

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(main(""));
});

app.use('/wiki', require('./routes/wiki'));


const sync = async () => {
  try {
    await Page.sync({
      force: true,
    });
    await User.sync({
      force: true,
    });
    await db.close();
  } catch (error) {
    await db.close();
    console.log(error);
  }
};

sync();

app.listen(3000);
