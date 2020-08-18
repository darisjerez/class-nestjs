import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './schemas/class.schema';
import { Model } from 'mongoose';
import { CreateClassDto } from './dto/createClass.dto';
import { FilterClassDto } from './dto/filterClass.dto';


@Injectable()
export class ClassService {
    constructor(@InjectModel(Class.name) private ClassModel: Model<Class>){}

    async saveClass(createClassDto: CreateClassDto): Promise<Class>{
        const classCreated = new this.ClassModel(createClassDto);
        return await classCreated.save();
    }

    async getAllClasses(filterClassDto: FilterClassDto): Promise<Class[]>{
        const classes = await await (await this.ClassModel.find().exec()).reverse();
        const { search } = filterClassDto;
        if (search) {
            if (classes.filter(classFound => classFound.title.toLowerCase().includes(search.toLowerCase())).length > 0) {
                return classes.filter(classFound => classFound.title.toLowerCase().includes(search.toLowerCase())).reverse();
            } else {
                throw new NotFoundException(`No Hay Resultados Para: ${search}`);
            }
        }

        return classes;
    }

    async findClassById(id: string): Promise<Class>{
        const classFound = await this.ClassModel.findOne({_id: id});
        if (!classFound) {
             throw new NotFoundException(`Class with ID: ${id} not found.`);
        }
        return classFound;
    }

    async deleteClass(id: string): Promise<any>{
        const classFound = await this.findClassById(id);
        await classFound.deleteOne();
        return { message: `Class with ID: ${id} removed from Classes Group`, status: "Success"}

    }
}
