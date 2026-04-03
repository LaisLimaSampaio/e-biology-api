import { Role } from '@prisma/client';

export class AuthResponseDto {
  accessToken: string;
  refreshToken: string;

  user: {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    role: Role;
  };
}
