import { Controller, Get, Post, Delete, UsePipes, ValidationPipe, Body, Param, Query } from '@nestjs/common';
import { ClassService } from './class.service';
import { Class } from './schemas/class.schema';
import { CreateClassDto } from './dto/createClass.dto';
import { FilterClassDto } from './dto/filterClass.dto';


@Controller('class')
export class ClassController {
    constructor(private classService: ClassService){}

    @Get()
    getAllClasses(
        @Query(ValidationPipe) filterClassDto: FilterClassDto
    ): Promise<Class[]>{
        return this.classService.getAllClasses(filterClassDto);
    }

    @Post()
    @UsePipes(ValidationPipe)
    saveClass(@Body() createClassDto: CreateClassDto): Promise<Class>{
        return this.classService.saveClass(createClassDto);
    }

    @Get('/:id')
    findClassById(@Param('id') id:string): Promise<Class>{
      return this.classService.findClassById(id);
    }

    @Delete('/:id')
    deleteClass(@Param('id') id:string): Promise<any>{
        return this.classService.deleteClass(id);
    }




}
