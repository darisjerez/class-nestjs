import {  IsString, IsOptional, IsNotEmpty } from "class-validator";

export class FilterClassDto {

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    search: string;
}
