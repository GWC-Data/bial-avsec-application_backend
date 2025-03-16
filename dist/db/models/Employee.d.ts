import { Model } from 'sequelize-typescript';
export declare class Employee extends Model {
    employee_Name: string;
    exam_Id: number;
    exam_Name: string;
    date: string;
    score: number;
    result: string;
    certificate: string;
}
