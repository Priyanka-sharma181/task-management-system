import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            tasks: import("../tasks/entities/task.entity").Task[];
        };
    }>;
    login(req: any, loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
        user: {
            id: any;
            email: any;
        };
    }>;
}
