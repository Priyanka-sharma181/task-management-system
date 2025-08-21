import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./entities/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>
  ) {}

  async create(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      userId,
    });

    return this.tasksRepository.save(task);
  }

  async findAll(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({
      where: { userId },
      order: { createdAt: "DESC" },
    });
  }

  async update(
    id: number,
    updateTaskDto: UpdateTaskDto,
    userId: number
  ): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    Object.assign(task, updateTaskDto);
    return this.tasksRepository.save(task);
  }

  async remove(id: number, userId: number): Promise<{ message: string }> {
    const task = await this.tasksRepository.findOne({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    await this.tasksRepository.remove(task);
    return { message: "Task deleted successfully" };
  }
}
