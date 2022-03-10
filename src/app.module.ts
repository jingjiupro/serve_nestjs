import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
