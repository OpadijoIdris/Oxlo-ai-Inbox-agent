import prisma from "../lib/prisma.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export class AuthService {
  static async register(userData: any) {
    const { fullName, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
  }

  static async login(email: string, password: string) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    return {
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
      token,
    };
  }

  static async getMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, fullName: true, email: true, createdAt: true },
    });
    return user;
  }
}
