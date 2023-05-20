import User from "../model/User";
import bcrypt from "bcryptjs";

// getALLUsers (GET)

export const getAllUser = async (req, res, next) => {
    let users;
    try {

        users = await User.find();

    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }

    return res.status(200).json({ users });
}


// SIGN UP FUNCTION (POST)
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existing_user;
    try {
        existing_user = await User.findOne({ email });
    }
    catch (err) {
        console.log(err);
    }

    if (existing_user) {
        return res.status(400).json({ message: "User Already Exist! Login Instead" });
    }

    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
    });


    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({ user });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existing_user;
    try {
        existing_user = await User.findOne({ email });
    }
    catch (err) {
        console.log(err);
    }

    if (!existing_user) {
        return res.status(404).json({ message: "User doesn't Exist! Sign Up Instead" });
        return;
    }

    const isPassword = bcrypt.compareSync(password, existing_user.password);

    if (isPassword) {
        res.status(200).json({ message: "Login Successful" });
        return;
    }

    res.status(400).json({ message: "Incorrect Password" });
    return;

}