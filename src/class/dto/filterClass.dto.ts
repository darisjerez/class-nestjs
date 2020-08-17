import {  IsString, IsOptional, IsNotEmpty } from "class-validator";

export class FilterClassDto {

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Campo no puede estar vacio."})
    search: string;
}
