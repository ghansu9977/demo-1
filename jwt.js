import jwt from "jsonwebtoken";
import express from "express";

const app = express();

const secret = "Vishal";

app.use('/token', (request, response) => {
      const payload = {
            id: 1,
            username: "ishal Gehlot",
            password: "vishal@99",
            contact: "1234567890",
            Address: "Saket Nagar Indore",
      };

      const token = jwt.sign(payload, secret);
      response.send(token);
      console.log(token);
});

app.get('/verify', (req, res) => {
      const token = req.headers.token;
      console.log(token);

      jwt.verify(token, secret, (err, decode) => {
            if (err) {
                  return res.status(500).json({ err: "not valid token" });
            }
            else {
                  console.log(decode);
                  return res.status(200).json({ msg: "valid token", decode });
            }
      })
});

app.listen(3001, () => {
      console.log('Server - Started on port  3000');
});


// iat : Windows portable executable contains a structure called Import Address Table(IAT).
// IAT is used to resolve the address of imported functions at runtime. It helps in resolving
// the addresses of DLLs and APIs that are not present in the application itself. When an application.
// imports a function from a DLL or API, it needs to know where this function is located so
