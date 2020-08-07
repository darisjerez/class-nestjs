import {  IsString, IsOptional } from "class-validator";

export class FilterClassDto {

    @IsString()
    @IsOptional()
    search: string;
}