import timespan from "jsonwebtoken/lib/timespan"
import { makeAutoObservable, makeObservable } from "mobx"

export default class BasketStore{

constructor(){
 this._basketDevices=[ { id: "1",userId:"user1",amount:1, cartPrice:1005,name: " mock data Samsung galaxy s10", price: 1005, raiting: 5, img: "https://images.news18.com/ibnlive/uploads/2021/09/google-search-16313394283x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" },
 { id: "2",userId:"user1",amount:1, name: " mock data Rtx",cartPrice:1700, price: 1700, raiting: 5, img: "https://images.news18.com/ibnlive/uploads/2021/09/google-search-16313394283x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" }]
this._price=0
 makeAutoObservable(this)
}

setDeleteDevice(id){
   this._basketDevices= this._basketDevices.filter((item)=>item.id!==id)
}
   setFromBasket(device){
  let found= this._basketDevices.find((item)=>item.id==device.id)
 
   if(found){
       const count=found.amount+=1
       found.cartPrice+=device.price
   }
   }  
       
   deleteItem(device){
    const found=this._basketDevices.find((item)=>item.id==device.id)
    if(found.amount<=0){return}
    if(found){
        found.cartPrice-=device.price
        found.amount-=1
    }

   }


 setItem(device){
    let found= this._basketDevices.find((item)=>item.id==device.id)
    if(found){
        const count=found.amount+=1
        found.cartPrice+=device.price
    }
    else{
       this._basketDevices=[...this._basketDevices, {...device,cartPrice:device.price,amount:1}] 
    }

}
   

get items(){
return this._basketDevices
}

get totalPrice(){
    let price=0
    this._basketDevices.forEach((device)=>price+=device.cartPrice)
    return price
}

 get amountInBasket(){
    let count=0
    this._basketDevices.forEach((element)=>count+=element.amount)
    console.log(count);
    return count
}


}
