import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService } from '../auth.service.js';
import prisma from '../../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

vi.mock('../../lib/prisma.js', () => ({
  default: {
    user: {
      create: vi.fn(),
      findFirst: vi.fn(),
      findUnique: vi.fn(),
    },
  },
}));

vi.mock('bcryptjs', () => ({
  default: {
    hash: vi.fn(),
    compare: vi.fn(),
  },
}));

vi.mock('jsonwebtoken', () => ({
  default: {
    sign: vi.fn(),
  },
}));

describe('AuthService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('register', () => {
    it('should hash password and create a new user', async () => {
      const userData = { fullName: 'Test User', email: 'test@example.com', password: 'password123' };
      const hashedPassword = 'hashedPassword123';
      const createdUser = { id: 'user-id', ...userData, password: hashedPassword };

      (bcrypt.hash as any).mockResolvedValue(hashedPassword);
      (prisma.user.create as any).mockResolvedValue(createdUser);

      const result = await AuthService.register(userData);

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          fullName: 'Test User',
          email: 'test@example.com',
          password: hashedPassword,
        },
      });
      expect(result).toEqual({ id: 'user-id', fullName: 'Test User', email: 'test@example.com' });
    });
  });

  describe('login', () => {
    it('should throw error if user not found', async () => {
      (prisma.user.findFirst as any).mockResolvedValue(null);

      await expect(AuthService.login('notfound@example.com', 'pass')).rejects.toThrow('Invalid credentials');
    });

    it('should return user and token if password matches', async () => {
      const user = { id: 'user-id', fullName: 'Test User', email: 'test@example.com', password: 'hashedPassword' };
      (prisma.user.findFirst as any).mockResolvedValue(user);
      (bcrypt.compare as any).mockResolvedValue(true);
      (jwt.sign as any).mockReturnValue('mock-token');

      const result = await AuthService.login('test@example.com', 'password');

      expect(result.token).toBe('mock-token');
      expect(result.user.email).toBe('test@example.com');
    });
  });
});
