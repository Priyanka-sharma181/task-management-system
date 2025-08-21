import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME ,
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_DATABASE ,
      entities: [User, Task],
      synchronize: true, // Set to false in production
      logging: false,
    }),
    AuthModule,
    TasksModule,
    UsersModule,
  ],
})
export class AppModule {}