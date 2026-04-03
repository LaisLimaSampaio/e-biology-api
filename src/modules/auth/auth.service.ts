import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: CreateUserDto): Promise<AuthResponseDto> {
    const { email, password, firstName, lastName } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
  }
}
