import { useState, useEffect } from "react"
import { UserProps } from "../../../types"
import Link from "next/link"
import classes from "../../styles/search.module.css"

const  checkInput = (text:string)=>{
   return /[^\s]/gim.test(text);
}
export const Search:React.FC = ()=>{
   const [searchText, setSearchText] = useState<string>('')
   const [usersArray, setUsersArray] = useState<UserProps[]>([])
   const [searchError, setSearchError] = useState<boolean>(false)
   
   const hendlerSearch = async () => {
      if(searchText){
         try{
         const response = await fetch(`https://dummyjson.com/users/search?q=${searchText}`)
         const data = await response.json()
         if(!data.total){
            setSearchError(true)
            setUsersArray([])
         }else{
            setSearchError(false)
            setUsersArray(data.users)
         }
         }catch(error){
            console.log(error)
         } 
      }else{
         setUsersArray([])
         setSearchError(false)
      } 
   }
   
   const getImputText = (text:string)=>{
      if(checkInput(text)){
         setSearchText(text)
      } else{setSearchText('')}
   }

   const clearResult = ()=>{
      setUsersArray([])
      setSearchText('')
   }

   useEffect(()=>{
      const debounce = setTimeout(()=>{
         hendlerSearch()
      },400)
      return()=>clearTimeout(debounce)
   },[searchText])
      
   return(<>
   <div className={classes.wrapper}>
      <div>
         <label >Search
            <input id="searchImput" className={classes.searchInput} value={searchText} onChange={(e:any)=>{
               getImputText(e.target.value) 
               }}>
            </input >
         </label>
      </div>
      <ul className={classes.searchList}>
         <>{searchError?<li className={classes.searchErr}>notFound</li>:
         <>{usersArray.map((el:UserProps)=>{return(
            <Link href={`/user/${el.id}`} onClick={clearResult} key={`${el.lastName}+${el.id}`}>
               <li  className={classes.searchItem}>
                  <span className={classes.searchSpan}>{el.firstName}</span>
                  <span className={classes.searchSpan}>{el.lastName}</span>
               </li>
            </Link>)   
         })}</>}
      </>
      </ul>
   </div>
   
   </>)
}