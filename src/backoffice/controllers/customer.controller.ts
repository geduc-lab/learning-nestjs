import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";



@Controller('customers')
export class CustomerControler {
    
    @Get()
    get(){
        return 'Obter Cliente'
    }

    @Get(':cpf')
    getById(@Param('cpf') cpf){
        return {
            customer: cpf,
        }
    }

    @Post()
    post(@Body() body){
        return body
    }

    @Put(':cpf')
    put(@Param('cpf') cpf , @Body() body){
        return {
            customer: cpf,
            data: body,
        };
    }

    @Delete(':cpf')
    delete(@Param('cpf') cpf){
        return 'remover Cliente'
    }
}