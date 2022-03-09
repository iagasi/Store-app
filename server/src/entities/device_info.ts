import { BaseEntity, Column,  Entity,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { Device } from "./device";



@Entity()

export class Device_Info extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:false})
    title:string
    @Column({nullable:false})
    description:string

    @ManyToOne(()=>Device,device=>device.deviceInfo)
    devices:Device[]
}