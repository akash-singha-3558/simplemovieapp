import Link from "next/Link";
const Navbar=()=>{
    return(
        <div style={{display:"flex",width:"100%",border:"solid", justifyContent:"space-around",alignItems:'center', background:"black",color:"white" ,padding:"10px",marginTop:'-5px',position:"fixed",zIndex:"10"}}>
         <Link href={"/"}>Home</Link>
         <Link href={"/watchlist"}>watchlist</Link>
        </div>
    )
}

export default Navbar;