import express from "express";
import bodyParser from 'body-parser';

import UserRouter from "./route/user.route.js";
import EducationRouter from "./route/education.route.js";
import PersonalRouter from "./route/personal.route.js";
import ProfessionalRouter from './route/professional.route.js';
import MedicalRouter from './route/medical.route.js';
import FavouriteRouter from './route/favourite.route.js';
import AllProfilesRouter from './route/allProfile.route.js';

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", UserRouter);
app.use("/personal", PersonalRouter);
app.use('/professional', ProfessionalRouter);
app.use("/education", EducationRouter);
app.use("/medical", MedicalRouter);
app.use('/allProfile', AllProfilesRouter);
app.use("/favourite", FavouriteRouter);


app.listen(port, () => {
      console.log("server started");
})


