import { Provider } from '@nestjs/common';
import { FindUserByEmailProviderAbstract } from './findUserByEmail.provider';
import { FindUserByEmailService } from './findUserByEmail.service';

export const FindUserByEmailProvider: Provider = {
  provide: FindUserByEmailProviderAbstract,
  useClass: FindUserByEmailService,
};
