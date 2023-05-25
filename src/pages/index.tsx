import { Inter } from 'next/font/google'
import { UserProps } from "../../types"
import  Link  from 'next/link'
import { useEffect, useState } from 'react'
import {Pagination} from "../components/pagination/pagination"
import { MainLayout } from '@/components/main/main'
import Image from 'next/image'
import classes from "../styles/index.module.css"


const inter = Inter({ subsets: ['latin'] })


 const Home:React.FC = ()=>{
  const [loading, setLoading] = useState<boolean>(true)
  const [curentPage, setCurentPage] = useState<number>(1)
  const [users, setUsers] = useState<UserProps[]>([])
  const [numberOfPages, setNumberOfPages] = useState<number>(10)
  const getUsers = async(page:number)=>{
    try{
      const response = await fetch(`https://dummyjson.com/users?limit=10&skip=${(page-1)*10}`)
      const data = await response.json()
      setUsers(data.users)
      setLoading(false)
      return data.users
    }catch(error){
          console.log(error)
         }
    }
  useEffect(()=>{
    getUsers(curentPage)
  },[curentPage])

  return (
    <MainLayout>
      <div className={classes.wrapper}>
        {loading?<span>Loading!!!</span>:<>
          <ul className={classes.userList}>
            {users.map((el:UserProps)=>{
              return(
              <li className={classes.userItem} key={`${el.firstName}+${el.id}`}>
                <Link href={`/user/${el.id}`}>
                  <div className={classes.userBox}>
                    <Image
                      src={el.image}
                      width={200}
                      height={200}
                      alt="Picture"
                      priority={false}
                    />
                    <h3 className={classes.tittle}>{el.firstName} {el.lastName}</h3>
                    <span>{el.id}</span>
                  </div>
                </Link>   
              </li>)   
            })}
          </ul>
          <Pagination 
            curentPage ={curentPage}  setCurentPage={setCurentPage} numberOfPages={numberOfPages}/>
        </>}
      </div>
    </MainLayout>
  )
}

export default Home