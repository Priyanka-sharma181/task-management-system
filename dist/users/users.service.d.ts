import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User | undefined>;
    findOneById(id: number): Promise<User | undefined>;
    validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
