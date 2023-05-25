import { Search } from "../search/search"
import classes from"../../styles/main.module.css"

export const MainLayout = ({children}:any)=>{
   return(<>
      <nav className={classes.nav}><Search/></nav>
      <main className={classes.main}>
         {children}
      </main>
   </>)
}