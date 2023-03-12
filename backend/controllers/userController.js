import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// desc   get user profile
// route  GET /api/users/profile
// access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
});

// desc   update user profile
// route  PUT /api/users/profile
// access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User not found");
  }

  const { name, email, password } = req.body;
  if (name) req.user.name = name;
  if (email) req.user.email = email;
  if (password) req.user.password = password;

  const updateUser = await req.user.save();

  res.json({
    _id: updateUser._id,
    name: updateUser.name,
    email: updateUser.email,
    isAdmin: updateUser.isAdmin,
    token: generateToken(updateUser._id),
  });
});

// desc   register a new user
// route  POST /api/users
// access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check if user existed
  const userExisted = await User.findOne({ email });
  if (userExisted) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// desc   auth user and get token
// route  POST /api/users/login
// access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  // email match & password match
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
