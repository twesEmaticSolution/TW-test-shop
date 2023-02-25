import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jeff Lin",
    email: "jeff@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tom Lee",
    email: "tom@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
