import { User } from '../../users/entities/user.entity';
export declare enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed"
}
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: Date;
    userId: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
