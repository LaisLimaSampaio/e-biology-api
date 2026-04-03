import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AuthResponseDto> {
    return await this.authService.register(createUserDto);
  }
}
