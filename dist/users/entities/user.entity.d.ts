import { Task } from '../../tasks/entities/task.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: Task[];
}
