interface Company{
   address: Address,
   department:string,
   name:string,
   title:string,
}

interface Address{
   address:string,
   city:string,
   coordinates:Coordinates,
   postalCode:string,
   state:string,
}

interface Coordinates{
   lat:number,
   lng:number,
}

interface Bank {
   cardExpire:string,
   cardNumber:string,
   cardType:string,
   currency:string,
   iban:string,
}

interface Hair{
   color:string,
   type:string,
}


export interface User{
   age:number,
   address:Address,
   bank:Bank,
   birthDate:string,
   bloodGroup:string,
   company:Company,
   domain:string,
   ein:string,
   email:string,
   eyeColor:string,
   firstName:string,
   gender:string,
   hair:Hair,
   height:number,
   id:number,
   image:string,
   ip:string,
   lastName:string,
   macAddress:string,
   maidenName:string,
   password:string,
   phone:string,
   ssn:string,
   university:string,
   userAgent:string,
   username:string,
   weight:number,
}
