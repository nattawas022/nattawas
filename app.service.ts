import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGit(): string {
    return 'Git and GitHub';
  }
  getPostman(): string {
    return 'we use postman';
  }
}