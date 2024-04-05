import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js'; 
import User from './user.model.js';

const Medical = sequelize.define('medical', {
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
            },
      },
      age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                  notNull: true,
                  min: 1, 
            },
      },
      bloodGroup: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                  notNull: true,
                  isIn: [['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']], 
            },
      },
      weight: {
            type: DataTypes.DECIMAL(5, 2), // Maximum 999.99 kg
            allowNull: false,
            validate: {
                  notNull: true,
                  min: 0.1, // Minimum weight allowed
            },
      },
      height: {
            type: DataTypes.DECIMAL(4, 2), // Maximum 999.99 cm
            allowNull: false,
            validate: {
                  notNull: true,
                  min: 50, // Minimum height allowed in cm
            },
      },
      history: {
            type: DataTypes.TEXT,
            allowNull: true,
      },
      imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                  isUrl: true,
            },
      },
});

Medical.belongsTo(User, { foreignKey: 'userId' });

export default Medical;
