import { validationResult } from 'express-validator';
import Favorite from '../models/favorite.model.js';
import sequelize from '../db/dbConfig.js';

export const addToFavorite = async(req, res, next) => {
      try{
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                  return res.status(400).json({ errors: errors.array()});
            }

            const { userId, productId } = req.body;
            
            const existingFavorite = await Favorite.findOne({ where: {userId, productId}});
            if (existingFavorite) {
                  return res.status(400).json({ message: 'Product already added to favorites' });
            }

            await Favorite.create({ userId, productId });

            return res.status(201).json({ message: 'Product added to favorites' });
      }catch (error) {
            console.error('Error adding to favorites:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
      }
};

export const viewFavorites = async (req, res, next) => {
      try{
            const userId = req.params.userId;
            const favorites = await Favorite.findAll({ where: { userId } });

            return res.status(200).json(favorites);
      }catch (error) {
            console.error('Error fetching favorites:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
      }
};

export const removeFavorite = async (req, res, next) => {
      try{
            const { userId, productId } = req.body;

            await Favorite.destroy({ where: { userId, productId } });

            return res.status(200).json({ message: 'Product removed from favorites' });
      }catch (error) {
            console.error('Error removing from favorites:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
      }
};
