import { PrismaClient } from "@prisma/client";
import { findUserEmailRepo } from "../repositories/findUserEmailRepo";
import { findUsernameRepo } from "../repositories/findUsernameReo";
// LOGIC
// Pertama cek dulu apakah variabel usernameOrEmail itu adalah email atau bukan
//Kalau email cari data email di dbs begitu sebaliknay di username
//kalau mislanya datanya gak ada ? langsung return account not found
// kalau datanya ada baru kita cek password yang ada di dbs
// dengan password yg di masukkan oleh user(req.body)
// Kalau misalnya passwordnya gak sama return false
// Kalau pwnya sama return  success

export const loginAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;
    if (usernameOrEmail.includes("@")) {
      user = await findUserEmailRepo(usernameOrEmail);
    } else {
      user = await findUsernameRepo(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "Account not found",
      };
    }

    if (user.isDeleted) {
      return {
        status: 404,
        message: "Account deleted",
      };
    }

    if (user.password !== password) {
      return {
        status: 400,
        message: "Invalid credentials",
      };
    }

    return {
      status: 200,
      message: "Login success",
      data: user,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
