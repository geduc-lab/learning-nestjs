import { Module } from '@nestjs/common'; //core do nest
import { CustomerControler } from './controllers/customer.controller';

@Module({
    controllers: [CustomerControler]  // controler da crud
})  // decorator, gerando informaçoes extras pra class
export class BackofficeModule {

}
