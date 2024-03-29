import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true})
    title?: string;

    @Prop({ required: true})
    description?: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);