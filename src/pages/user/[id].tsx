import { GetServerSideProps } from "next"
import { UserProps } from "../../../types";
import { MainLayout } from "@/components/main/main";
import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/user.module.css"
interface UsersProps{
   user:UserProps
 }
const User:React.FC<UsersProps> = ({user})=>{
  
   return<MainLayout>
      <div className={classes.wrapper}> 
         <Image
            src={user.image}
            width={400}
            height={400}
            alt="Picture"
            priority={false}
         />
         <h1 className={classes.tittle}>{user.firstName} {user.lastName}</h1>
         <ul className={classes.datList}>
            <li className={classes.dataItem}>email: {user.email}</li>
            <li className={classes.dataItem}>phone: {user.phone}</li>
            <li className={classes.dataItem}>age: {user.age}</li>
            <ul className={classes.datList}>
               <li className={classes.dataItem}>address: {user.address.address}</li>
               <li className={classes.dataItem}>city: {user.address.city}</li>
               <li className={classes.dataItem}>state: {user.address.state}</li>
            </ul>
         </ul>
         <Link href={`/`}><button className={classes.btn}>back to users </button></Link>   
      </div>
      
   </MainLayout>
   
   
   
}

export const getServerSideProps:GetServerSideProps = async ({params}:any)=>{
   
   const response = await fetch(`https://dummyjson.com/users/${params.id}`)
   const user = await response.json()
   return {
      props: { user },
    };
}

export default User