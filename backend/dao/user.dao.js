import User from "../Model/user.model.js";


export const createUser = async (userData) => {
   const user = new User(userData);
   await user.save();
   return user;
}

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

export const findUserById = async (id) => {
    return await User.findById(id);
}