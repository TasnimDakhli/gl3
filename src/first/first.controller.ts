import { Controller, Get,Post } from '@nestjs/common';

@Controller('first')
export class FirstController {
    @Get()
    getFirst(){
        console.log('GET');
        return 'Get';
    }
    @Post()
    postFirst(){
        console.log('POST');
        return 'post'
    }
  
}
