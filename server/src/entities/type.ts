import { BaseEntity, Column,  Entity,  ManyToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "./brand";

@Entity()

export class Type extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:false,unique:true})
    name:string

@ManyToMany(
    ()=>Brand,)
    brand:Brand[]

}