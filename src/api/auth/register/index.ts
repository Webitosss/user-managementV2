import { Provider } from '@nestjs/common';
import { RegisterUserProvider } from './register.provider';
import { RegisterUserService } from './register.service';

export const RegisterProvider: Provider = {
  provide: RegisterUserProvider,
  useClass: RegisterUserService,
};
