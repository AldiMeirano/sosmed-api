import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";
import { getAllAction } from "../actions/getAllAction";
import { findUserByIdAction } from "../actions/findUserIdAction";
import { keepLoginAction } from "../actions/keepLoginAction";
import { registerRanoAction } from "../actions/registerRanoAction";
import { loginAction } from "../actions/loginAction";

export class UserContoller {
  async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getAllAction();
      res.status(200).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async findUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const result = await findUserByIdAction(id);
      res.status(200).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body.user;
      const result = await keepLoginAction(Number(id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerRanoAction(req.body);
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { usernameOrEmail, password } = req.body;
      const result = await loginAction(usernameOrEmail, password);
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
    }
  }
}
