import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc() {
    return {
      name: 'john Doe',
      age: 30,
      hobby: 'play Games',
    };
  }
}
