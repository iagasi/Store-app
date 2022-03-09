import { BaseEntity, Column,  Entity,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { Device } from "./device";
import { User } from "./user";


@Entity()
export class Raiting extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:false})
    rate:number

    @ManyToOne(()=>User,user=>user.raitings)


    user:User

    @ManyToOne(()=>Device,device=>device.raitings)
    device:Device
}