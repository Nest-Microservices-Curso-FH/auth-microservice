import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*
    foo.* matches foo.bar, foo.baz, and so on, but not foo.bar. baz
    foo.*. bar matches foo.baz.bar, foo.qux.bar, and so on, but not foo.bar or foo.bar.baz
    foo. › matches foo.bar, foo.bar.baz, and so on
• */
  @MessagePattern('auth.register.user')
  registerUser() {
    return 'register user';
  }
  
  @MessagePattern('auth.login.user')
  loginUser() {
    return 'Login user';
  }
  @MessagePattern('auth.verify.user')
  verifyToken() {
    return 'verify user';
  }

  
}
