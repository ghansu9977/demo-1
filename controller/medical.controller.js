import Medical from "../model/medical.model.js";

export const create = (request, response, next) => {
      Medical.create({
            userId: request.body.userId,
            fullName: request.body.fullName,
            age: request.body.age,
            bloodGroup: request.body.bloodGroup,
            weight: request.body.weight,
            height: request.body.height,
            history: request.body.history,
            imgUrl: request.body.imgUrl ? request.body.imgUrl : null
      }).then(result => {
            return response.status(200).json({ data: result.dataValues, message: "User's Medical Profile Created." });
      }).catch(err => {
            console.error(err);
            return response.status(500).json({ error: "Internal Server Error." });
      });
};

export const update = async (request, response, next) => {
      const userId = request.body.userId;

      try {
            if (!userId) {
                  return response.status(400).json({ error: 'User ID is required for updating.' });
            }

            const [updatedRows] = await Medical.update({
                  userId: request.body.userId,
                  fullName: request.body.fullName,
                  age: request.body.age,
                  bloodGroup: request.body.bloodGroup,
                  weight: request.body.weight,
                  height: request.body.height,
                  history: request.body.history,
                  imgUrl: request.body.imgUrl ? request.body.imgUrl : null
            }, {
                  where: { id: userId }
            });

            if (updatedRows == 1) {
                  return response.status(200).json({ message: 'User Data Update Successful.' });
            } else {
                  return response.status(404).json({ error: 'User not found.' });
            }
      } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Internal Server Error.', message: error.message });
      }
};

export const view = (request, response, next) => {
      Medical.findAll({ raw: true })
            .then(result => {
                  console.log(result);
                  return response.status(200).json({ data: result });
            }).catch(err => {
                  console.error(err);
                  return response.status(500).json({ error: "Internal Server Error.", message: err.message });
            });
};

export const remove = async (request, response, next) => {
      try {
            const deletedRows = await Medical.destroy({ where: { id: request.body.id } });
            if (deletedRows > 0) {
                  return response.status(200).json({ message: 'User removed successfully.' });
            } else {
                  return response.status(404).json({ error: 'User not found.' });
            }
      } catch (err) {
            console.error(err);
            return response.status(500).json({ error: 'Internal Server Error.', message: err.message });
      }
};

export default Medical;