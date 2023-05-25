import { useEffect,  useState } from "react";
import classes from "../../styles/pagination.module.css"
interface PaginationProps{
   curentPage:number,
   setCurentPage:any,
   numberOfPages:number,
}

export const Pagination:React.FC<PaginationProps> = ({curentPage, setCurentPage, numberOfPages})=>{
   const [paginationArray, setPaginationArray] = useState<(number|string)[]>([])
   const buildPagination =()=>{
      const paginationArray:(number|string)[] = []
      for(let i=1; i<=numberOfPages; i++){
         if(i===1|| i===numberOfPages||
            i===curentPage||
            i===curentPage-1||
            i===curentPage+1 || 
            curentPage===1 && i===curentPage+2 ||
            curentPage===numberOfPages && i===curentPage-2 ){
            paginationArray.push(i)
         }else{
            paginationArray.push("...")
         }
      }
      const buttonArray:(number|string)[] = paginationArray.filter((el, index, array)=>{
         if(el!==array[index-1]){
            return el
         }
      })
      setPaginationArray(buttonArray)
   }

   useEffect(()=>{
      buildPagination()
   },[curentPage])
   
   const handle = (event:any)=>{
       const action = event.target.innerText
       if(event.target.nodeName === "BUTTON"){
         if(action==="prev" && curentPage > 1){
            setCurentPage(curentPage-1)
          }else if(action==="next" && curentPage < numberOfPages){
            setCurentPage(curentPage+1)
          }else if(action!=="prev" && action!=="next" && +action!==curentPage){
            setCurentPage(+action)
          }  
       }
   }
   
   return<div className={classes.paginationBox}>
   
   <ul className={classes.paginationList} onClick={handle}>
      <li ><button className={classes.pageBtn}>prev</button></li>
      {paginationArray.map((el:any, index:number)=>{return typeof el === "number" ? 
      <li  key={el}><button className={el===curentPage?classes.pageBtnActive: classes.pageBtn}>{el}</button></li>:
      <li key={el+index}>...</li>})}
      <li ><button className={classes.pageBtn}>next</button></li>
   </ul>
   </div>
}