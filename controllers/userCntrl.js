import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a User");

  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "user registerd succesfully",
      user: user,
    });
  } else res.status(201).send({ message: "user already registered" });
});
