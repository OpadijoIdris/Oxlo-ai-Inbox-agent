import { type Request, type Response } from "express";
import { AuthService } from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await AuthService.login(email, password);
    res.status(200).json({ user, token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.getMe((req as any).userId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
