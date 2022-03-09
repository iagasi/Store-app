import { BaseEntity, Column,  PrimaryGeneratedColumn } from "typeorm";



export class Type_Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number|undefined
  
}