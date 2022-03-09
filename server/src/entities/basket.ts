import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Basket_Device } from "./basket_device";
import { User } from "./user";



@Entity()
export class Basket extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number 

  @OneToOne(()=>User,
  user=>user.basket
  )
  
@OneToMany(()=>Basket_Device,
basketDevice=>basketDevice.basket)
basket_device:Basket_Device
 
}