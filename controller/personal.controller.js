import Personal from "../model/personal.model.js";

export const create = (request, response, next) => {
      Personal.create({
            userId: request.body.userId,
            fullName: request.body.firstName,
            gmail: request.body.gmail,
            dob: request.body.dob,
            mobile:request.body.mobile,
            city:request.body.city,
            address: request.body.address,
            imgUrl: request.body.imgUrl,
            additionalInformaton: request.body.additionalInformaton

      }).then(result => {
            return response.status(200).json({ data: result.dataValues, message: "User's Personal Table Created." });
      }).catch(err => {
            return response.status(401).json({ err: "Internal Server Error." });
      });

};

export const update = async (request, response, next) => {
      const userId = request.body.userId;

      try {
            if (!userId) {
                  return response.status(400).json({ error: 'User ID is required for updating.' });
            }

            const [updatedRows] = await Personal.update({
                  userId: request.body.userId,
                  fullName: request.body.firstName,
                  gmail: request.body.gmail,
                  dob: request.body.dob,
                  mobile: request.body.mobile,
                  city: request.body.city,
                  address: request.body.address,
                  imgUrl: request.body.imgUrl,
                  additionalInformaton: request.body.additionalInformaton
            }, {
                  where: { id: userId }
            });

            if (updatedRows == 1) {
                  return response.status(200).json({ message: 'User Data Update Successful.' });
            } else {
                  return response.status(404).json({ error: 'User not found.' });
            }
      } catch (error) {
            return response.status(500).json({ error: 'Internal Server Error.', error: error.message });
      }
}

export const view = (request, response, next) => {
      Personal.findAll({ raw: true })
            .then(result => {
                  console.log(result);
                  return response.status(200).json({ data: result })
            }).catch(err => {
                  console.log(err);
                  return response.status(500).json({ err: "internal server error", err });
            })
}

export const remove = async (request, response, next) => {
      try {
            const deletedRows = await Portfolio.destroy({ where: { id: request.body.id } });
            if (deletedRows > 0) {
                  return response.status(200).json({ message: 'User removed successfully.' });
            } else {
                  return response.status(404).json({ error: 'User not found.' });
            }
      } catch (err) {
            console.error(err);
            return response.status(500).json({ error: 'Internal Server Error.' });
      }
};