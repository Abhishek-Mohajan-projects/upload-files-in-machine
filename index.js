const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;


app.get("/test", (req, res) => {
    res.status(200).send("testing multer");
});


app.get("/register", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/index.html");
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname
      cb(null, name);
    }
});
  
const upload = multer({ storage: storage })

app.post("/register", upload.single('image'), (req, res) => {
    res.status(200).send("file is uploaded");
});


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});