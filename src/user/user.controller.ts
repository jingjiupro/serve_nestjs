import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindUserDto } from './dto/find-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    // @Get(':id')
    // async getUserById(@Param() params:RetrieveUserDto): Promise<User>{
    //     return await this.userService.findOne(params.id)
    // }

    // @Get()
    // async findAll(@Query() query: FindUserDto): Promise<User> {
    //   return await this.userService.findAll(query);
    // }

    
}
