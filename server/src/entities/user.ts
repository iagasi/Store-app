import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Basket } from "./basket";
import { Raiting } from "./raiting";



@Entity()
export class User extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    email: string
     
    @Column()
    password: string

    @Column({default:"USER"})
    role:string


    @OneToOne(()=>Basket)
    @JoinColumn()
    basket:Basket

    @OneToMany(()=>Raiting,raiting=>raiting.user)
    
  raitings:Raiting[]
}