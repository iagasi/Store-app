import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Basket } from "./basket";
import { Device } from "./device";



@Entity()
export class Basket_Device extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number | undefined

    @ManyToOne(() => Basket, basket => basket.basket_device)
    basket: Basket

@ManyToOne(()=>Device,device=>device.basketDevice)
devices:Device[]

}