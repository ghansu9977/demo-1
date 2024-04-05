import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import Professional from './professional.model.js';
import Personal from './personal.model.js';
import Educational from './educational.model.js';
import Medical from './medical.model.js';

const AllProfiles = sequelize.define('AllProfiles', {
      // Define AllProfiles attributes if needed
});

// Define associations
AllProfiles.belongsTo(Professional);
AllProfiles.belongsTo(Personal);
AllProfiles.belongsTo(Educational);
AllProfiles.belongsTo(Medical);

export default AllProfiles;
