const User = require("../models/users");
const handleError = require("../service/handleError");
const handleSuccess = require("../service/handleSuccess");
const user = {
  async getUsers(req, res) {
    const allUsers = await User.find();
    handleSuccess(res, allUsers);
  },
  async createUser(req, res) {
    //console.log("post  createUser");

    try {
      const data = req.body;
      console.log(data);

      if (data.name || data.email) {
        const newUser = await User.create({
          name: data.name,
          email: data.email,
          photo: data.photo,
        });

        handleSuccess(res, newUser);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async updateUser(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;
      console.log("id:" + id);

      if (data.name || data.email) {
        const updateUser = await User.findByIdAndUpdate(id, {
          name: data.name,
          email: data.email,
          photo: data.photo,
        });
        handleSuccess(res, updateUser);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const deleteUser = await User.findByIdAndDelete(id);

      handleSuccess(res, deleteUser);
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = user;
