import Professional from '../model/professinal.model.js';

export const create = (request, response, next) => {
      let {
            userId,
            fullName,
            gmail,
            professional,
            organization,
            designation,
            contact,
            city,
            address,
            imgUrl,
            additionalInformation
      } = request.body;

      Professional.create({
            userId,
            fullName,
            gmail,
            professional,
            organization,
            designation,
            contact,
            city,
            address,
            imgUrl,
            additionalInformation
      })
            .then(result => {
                  return response.status(200).json({ msg: 'Professional profile created successfully' });
            })
            .catch(err => {
                  console.log(err);
                  if (err.name === 'SequelizeUniqueConstraintError') {
                        return response.status(501).json({ err: "Already registered...." });
                  } else {
                        return response.status(500).json({ err: "Internal server error" });
                  }
            });
};

export const update = (request, response, next) => {
      let {
            userId,
            fullName,
            gmail,
            professional,
            organization,
            designation,
            contact,
            city,
            address,
            imgUrl,
            additionalInformation,
            Id
      } = request.body;

      Professional.update(
            {
                  userId,
                  fullName,
                  gmail,
                  professional,
                  organization,
                  designation,
                  contact,
                  city,
                  address,
                  imgUrl,
                  additionalInformation
            },
            {
                  where: { id: Id }
            }
      )
            .then(result => {
                  if (result[0] == 1) {
                        return response.status(200).json({ msg: "Professional profile updated successfully", data: result });
                  } else {
                        return response.status(404).json({ err: "Professional profile not found" });
                  }
            })
            .catch(err => {
                  console.log(err);
                  return response.status(500).json({ err: "Internal server error" });
            });
};

export const view = (request, response, next) => {
      Professional.findAll()
            .then(result => {
                  console.log(result);
                  response.status(200).json({
                        message: "Professional Profile View Successful", data: result
                  });
            })
            .catch(err => {
                  console.log(err);
                  response.status(404).json({ err: "Error in viewing profiles" });
            });
};

export const remove = (request, response, next) => {
      let { Id } = request.body;

      Professional.destroy({
            where: { id: Id }
      })
            .then(result => {
                  if (result == 1) {
                        return response.status(200).json({ msg: "Professional profile removed successfully" });
                  } else {
                        return response.status(404).json({ err: "Professional profile not found" });
                  }
            })
            .catch(err => {
                  console.log(err);
                  return response.status(500).json({ err: "Internal server error" });
            });
};

export default Professional;