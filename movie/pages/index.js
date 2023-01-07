import {Grid,GridItem,Text} from "@chakra-ui/react"
import Cards from "../Component/cards"


export default function Home({data}) {

  return (
    <>
    <Text fontSize="24px" textAlign={"Center"} color="teal">Movie List</Text>
    <Grid templateColumns='repeat(3, 1fr)' m="auto"  justifyContent="space-evenly" gap="6" p="10">
     {data.map((el)=>(
      <GridItem key={el.id}>
      <Cards el={el}/>
      </GridItem>
     ))}
    </Grid >
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://mockserver-rny6.onrender.com/movies`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data:data } }
}