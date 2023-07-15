import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "habib",
    lastName: "belkacem",
    age: 32,
    email: "habib16gb@gmail.com",
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 33,
    email: "johndoe@gmail.com",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(
    `User with name: ${req.body.firstName} ${req.body.lastName} added succefully!`
  );
});

export default router;
