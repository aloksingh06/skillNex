import { COOKIE_OPTION } from "../config/Config.js";
import { loginUserService, registerUserService } from "../Service/authService.js";


export const registerUser = async (req, res)=>{
    const {username, email, password} = req.body;
    const token = await registerUserService(username, email, password);
   return res.status(201).json({message: "User registered successfully", token});
}

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    const { user, token } = await loginUserService(email, password);
    res.cookie('token', token, COOKIE_OPTION)
    return res.status(200).json({message: "User logged in successfully"});
}