import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService]
})
export class TodoModule {}
