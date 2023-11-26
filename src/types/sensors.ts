import { ReadingType } from "./readings";

export interface SensorType{
    sensor_id:string;
    readings:ReadingType[];
}