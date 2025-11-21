import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { signToken } from "../utils/helper.js";



export const registerUserService = async (username, email, password) => {

    console.log("Registering user:", { username, email, password });
    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    const emailExists = await findUserByEmail(email);
    if (emailExists) {
        throw new Error("Email already in use");
    }
    const newUser = await createUser({ username, email, password });
}


export const loginUserService = async (email, password) => {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }   
    const user = await findUserByEmail(email);
    if (!user || user.password !== password) {
        throw new Error("Invalid email or password");
    }
    const token = signToken({ id: user._id });
    return { user, token };
}