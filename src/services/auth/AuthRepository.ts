import type { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export interface IAuthRepository {
  userExists(email: string): Promise<User | null>;
}

class AuthRepository implements IAuthRepository {
  async userExists(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export const authRepository = new AuthRepository();
