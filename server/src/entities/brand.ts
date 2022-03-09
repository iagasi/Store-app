import { BaseEntity, Column,  Entity,  JoinColumn,  JoinTable,  ManyToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Type } from "./type";

@Entity()

export class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string

    @ManyToMany(()=>Type)
    @JoinTable({
        name:"bankers_and_clients",
        joinColumn:{
         name:"brand",
         referencedColumnName:"id"
        },
        inverseJoinColumn:{
            name:"type",
            referencedColumnName:"id"
        }
    })
    types:Type[]
}