import { Image,Text,Button,Box,Flex} from "@chakra-ui/react"
import Link from "next/Link";
import { useRouter } from "next/router";
import { useToast } from '@chakra-ui/react';
import axios from "axios";
const Cards=({el})=>{
  const toast = useToast()
  const router=useRouter();
  return(
<Box key={el.id} m="auto" border="1px solid #679b64" h="350px" w="340px" textAlign="center" borderRadius="10px" >
<Image src={el.Images[2]} h="240px" w="100%" alt="movie" borderTopLeftRadius="10px" borderTopRightRadius="10px"/>
<Text>Movie Name : {el.Title}</Text>
<Flex justifyContent="space-between" p="2">

<Button border="none" bg="teal" color="white" p="5" borderRadius="5" cursor="pointer"
  onClick={async ()=>{
  let data = await axios.post("https://mockserver-rny6.onrender.com/cart",{...el})
  toast({
    position:"top",
    
    description: "Movie has been added your watchlist",
    status: 'success',
    duration: 3000,
    isClosable: true,
  })


  }}
>Add to Watch List</Button>


<Link href={el.id.toString()}><Button border="none" color="white" bg="red" p="5" borderRadius="5" textDecoration="none" cursor="pointer">More Details</Button></Link>
</Flex>

</Box>
  )
}
export default Cards;