import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import User from './user.model.js';

const Education = sequelize.define('education', {
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
      },
      userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                  model: User,
                  key: 'id',
            },
      },
      fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                  notNull: true,
                  isAlpha: true,
            },
      },
      email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                  isEmail: true,
            },
      },
      dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                  notNull: true,
            },
      },
      gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: false,
      },
      contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                  notNull: true,
                  isNumeric: true,
            },
      },
      city: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      address: {
            type: DataTypes.STRING,
      },
      graduation: {
            type: DataTypes.STRING,
            allowNull: true,
      },
      ugCGPA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
      },
      passoutYear1: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
      },
      postGraduation: {
            type: DataTypes.STRING,
            allowNull: true,
      },
      pgCGPA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
      },
      passoutYear2: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
      },
      imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
      },
      additionalInformation: {
            type: DataTypes.STRING,
            allowNull: true,
      },
});

Education.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
      console.log('Education Table Created.');
}).catch(err => {
      console.log('Error creating Education table:');
      console.error(err);
});

export default Education;
