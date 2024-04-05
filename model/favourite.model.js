import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';

const Favorite = sequelize.define('Favorite', {
      userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
      },
      productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
      },
});

export default Favorite;
