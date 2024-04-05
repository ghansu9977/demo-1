import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

export const singUp = (request, response, next) => {
      const errors = validationResult(request);
      if (!errors.isEmpty())
            return response.status(401).json({ errors: errors.array() })

      User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password

      }).then(result => {
            console.log(result);
            return response.status(200).json({ data: result.dataValues, message: "User created..", });
      }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error..", err });
      })
}

export const signIn = async (request, response, next) => {

      console.log("signIn-work")
      let email = request.body.email;
      let password = request.body.password;

      let user = await User.findOne({ where: { email }, raw: true });

      if (user) {
            if (User.checkPassword(password, user.password)) {
                  const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
                  return response.status(200).json({ message: "Sign In Success", token });
            } else {
                  return response.status(401).json({ error: "Unauthorized error" });
            }
      } else {
            return response.status(401).json({ error: "Invalid Email or Password" });
      }

}

export const update = (request, response, next) => {
      const userId = request.body.userId;

      if (!userId) {
            return response.status(400).json({ error: 'User ID is required for updating.', error });
      }
      User.update({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
      }, {
            where: { id: userId }
      })
            .then(([updatedRows]) => {
                  if (updatedRows == 1) {
                        return response.status(200).json({ message: 'User Data Update Successful.' });
                  } else {
                        return response.status(404).json({ error: 'User not found.' });
                  }
            })
            .catch(err => {
                  console.error(err);
                  return response.status(500).json({ error: 'Internal Server Error.' });
            });
}

export const userList = (request, response, next) => {
      User.findAll({ raw: true })
            .then(result => {
                  console.log(result);
                  return response.status(200).json({ data: result })
            }).catch(err => {
                  console.log(err);
                  return response.status(500).json({ err: "internal server error" });
            })
}

export const getUserByEmail = (request, response, next) => {
      User.findOne({ where: { email: request.body.email }, raw: true })
            .then(result => {

                  if (result) {

                        return response.status(200).json({ data: result });
                  } else {
                        return response.status(404).json({ error: 'User not found.' });
                  }
            })
            .catch(err => {
                  console.error(err);
                  return response.status(500).json({ error: "Internal Error", err });
            });
};




export const remove = async (request, response, next) => {
      try {
            const deletedRows = await User.destroy({ where: { id: request.body.id } });
            if (deletedRows == 1) {
                  return response.status(200).json({ message: 'User removed successfully.' });
            } else {
                  return response.status(404).json({ error: 'User not found.' });
            }
      } catch (err) {
            console.error(err);
            return response.status(500).json({ error: 'Internal Server Error.', err });
      }
};

