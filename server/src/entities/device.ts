import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Basket_Device } from "./basket_device";
import { Device_Info } from "./device_info";
import { Raiting } from "./raiting";



@Entity()
export class Device extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true, nullable: false })
    name: string
    
    @Column({ nullable: false })
    price: number
    @Column({ nullable: false })
    img: string
    @Column()
    typeId: string
    @Column()
    brandId: string

    @OneToMany(() => Raiting, raiting => raiting.device)
    raitings: Raiting[]

    @OneToMany(() => Basket_Device, basketDevice => basketDevice.devices)
    basketDevice: Basket_Device[]

    @OneToMany(() => Device_Info, deviceInfo => deviceInfo.devices)
    deviceInfo: Device_Info[]
}