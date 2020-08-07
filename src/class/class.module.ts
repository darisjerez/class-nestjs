import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Class, ClassSchema } from './schemas/class.schema';
import { ClassController } from './class.controller';

@Module({
  providers: [ClassService],
  imports: [MongooseModule.forFeature([{name: Class.name, schema: ClassSchema}])],
  controllers: [ClassController]
})
export class ClassModule {}
