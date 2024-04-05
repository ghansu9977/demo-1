import express from "express";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'images')));

const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'images'));
      }
      ,
      filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
      },
});

const upload = multer({ storage: storage });
console.log(upload);

app.post('/upload', upload.single('image'), (req, res) => {
      const { filename, path } = req.file;
      res.status(200).json({ msg: "Successfully uploaded", data: { filename, path } });
});

app.listen(3000, () => {
      console.log("Server started on port 3000"
      );
});