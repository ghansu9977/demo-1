import { Sequelize } from "sequelize";

const sequelize = new Sequelize("oneprofile", 'root', 'root', {
      host: "localhost",
      dialect: "mysql"
});

sequelize.authenticate().then(function () {
      console.log('Database Connection has been established');
}).catch(err => {
      console.error('Database Connection Failed');
      console.log(err);
});

export default sequelize;