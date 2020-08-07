import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Class extends Document {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    simulationLink: string;

    @Prop()
    teacherName: string;

    @Prop()
    expiration: string;

    @Prop()
    creation: string;

}

export const ClassSchema = SchemaFactory.createForClass(Class);