import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import User from './user.model.js';

const Personal = sequelize.define('Personal', {
      userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                  model: 'users',
                  key: 'id'
            }
      },
      id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
      },
      fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                  notNull: { msg: 'Full Name is required' },
                  notEmpty: { msg: 'Full Name cannot be empty' }
            }
      },
      dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                  notNull: { msg: 'Date Of Birth is required' },
                  notEmpty: { msg: 'Date of birth cannot be empty' },
                  isDate: { msg: 'Please enter a valid Date of Birth' }
            }
      },
      mobile: {
            type: DataTypes.STRING,
            allowNull: true,
      },
      city: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '', 
      },
      address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                  notNull: { msg: 'Address is required' },
                  notEmpty: { msg: 'Address cannot be empty' }
            }
      },
      imgUrl: {
            type: DataTypes.STRING,
            allowNull: true
      },
      additionalInformation: { 
            type: DataTypes.STRING,
            allowNull: true
      }
});

Personal.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
      console.log('Personal Table Created.');
}).catch(err => {
      console.log('Error creating Personal table:');
      console.error(err);
});

export default Personal;
