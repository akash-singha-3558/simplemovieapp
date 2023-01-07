
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import axios from "axios";
  import { useRouter } from 'next/router';

const Watchlist=({data})=>{
    const toast = useToast()
    const router=useRouter();
    const refresh=()=>{
      console.log("refresh")
      router.replace(router.asPath)
      
    }
    const handleDelete=(el)=>{
      axios.delete(`https://mockserver-rny6.onrender.com/cart/${el}`).then(()=> refresh());
      console.log("Deleted")

     toast({
        position:"top",
        
        description: "Movie has been removed from your watchlist",
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
}
return(
    <TableContainer>
  <Table variant='simple'>
 
    <Thead>
      <Tr>
        <Th>Movie Name</Th>
        <Th>Year</Th>
        <Th >Released</Th>
        <Th>Genre</Th>
        <Th>Language</Th>
        <Th>Country</Th>
        <Th>Imdb Rating</Th>
        <Th>Remove From Watchlist</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
     data.map((el)=>(
        <Tr key={el.id}>
            <Td>{el.Title}</Td>
            <Td>{el.Year}</Td>
            <Td>{el.Released}</Td>
            <Td>{el.Genre}</Td>
            <Td>{el.Language}</Td>
            <Td>{el.Country}</Td>
            <Td>{el.imdbRating}</Td>
            <Td>{<Button bg="red" color="white" onClick={()=>{handleDelete(el.id)}}>Remove</Button>}</Td>
        </Tr>
     ))
    }
     </Tbody> 
    
  </Table>
</TableContainer>
)



}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://mockserver-rny6.onrender.com/cart`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}



export default Watchlist;