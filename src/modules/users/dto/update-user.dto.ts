// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateUserDto {
    id: number;
    name?: string;
    email?: string;
    password?: string;
  }
  