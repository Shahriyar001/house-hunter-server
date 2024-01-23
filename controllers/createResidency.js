import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  const residency = await prisma.residency.create({
    data: {
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      owner: { connect: { email: userEmail } },
    },
  });
  try {
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A resideny with address alredy there");
    }
    throw new Error(err.message);
  }
});