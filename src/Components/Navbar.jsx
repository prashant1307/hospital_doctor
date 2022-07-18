import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// const links=[
//     {
//         to:"/",
//         title:"Home"
//     },
//     {
//         to:"/doctor",
//         title:"Add Doctor"
//     },
//     {
//         to:"/hospital",
//         title:"Add Hospital"
//     }
// ]
// export default function Navbar(){
//     return(
//         <div style={{display:"flex", gap:"2rem", justifyContent:"centre"}}>
//             {
//                 links.map((item)=>(
//                     <Link to={item.to} key={item.to}>
//                         {item.title}
//                     </Link>
//                 ))
//             }
//         </div>
//     )
// }
export default function Navbar(){
    return(
<Stack direction='row' spacing={4} align='center'>
<Button colorScheme='teal' variant='solid'>
    <Link to="/">Home</Link>
  </Button>
  
  <Button colorScheme='teal' variant='solid'>
    <Link to="/doctor">Add Doctor</Link>
  </Button>
  <Button colorScheme='teal' variant='solid'>
    <Link to="/hospital">Add Hospital</Link>
  </Button>
  
 
</Stack>
)}