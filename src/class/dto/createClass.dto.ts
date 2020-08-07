import { IsNotEmpty, IsString } from "class-validator";

export class CreateClassDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    simulationLink: string; 

    @IsNotEmpty()
    @IsString()
    teacherName: string;

    @IsNotEmpty()
    @IsString()
    expiration: string;

    @IsNotEmpty()
    @IsString()
    creation: string; 

}