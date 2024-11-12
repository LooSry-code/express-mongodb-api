import User, { IUser } from "../models/userModel";

const createUser = async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
};

const getAllUsers = async () => {
    return await User.find();
};

export { createUser, getAllUsers } ; 