import AllProfiles from '../model/allProfile.model.js';

// Controller function to get all profiles
export const getAllProfiles = async (req, res, next) => {
      try {
            const profiles = await AllProfiles.findAll({
                  include: [Professional, Personal, Educational, Medical],
            });
            return res.status(200).json(profiles);
      } catch (error) {
            console.error('Error fetching profiles:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
      }
};

// Other controller functions for creating, updating, deleting profiles can be added here
