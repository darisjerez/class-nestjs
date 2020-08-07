import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './class/class.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ClassModule, MongooseModule.forRoot("mongodb+srv://admin:admin1234@cluster0.barty.mongodb.net/class?retryWrites=true&w=majority"), ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
