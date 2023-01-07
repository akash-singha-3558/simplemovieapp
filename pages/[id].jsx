
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from "axios";
import { useToast } from '@chakra-ui/react'
const SingleMovie=({el})=>{
  const toast = useToast()

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              el.Images[2]
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {el.Title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
             {el.Year}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
              Writer: {el.Writer}
              </Text>
              <Text fontSize={'lg'}>
              Plot: {el.Plot}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               Actors: {el.Actors}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Director: {el.Director}</ListItem>
                  <ListItem>Genre: {el.Genre}</ListItem>{' '}
                  <ListItem>Awards:  {el.Awards}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Metascore:{el.Metascore}</ListItem>
                  <ListItem>Rating :{el.imdbRating}</ListItem>
                  <ListItem>Imdb Votes :{el.imdbVotes}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                 Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Runtime :  
                  </Text>{' '}
                  {el.Runtime}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Rated : 
                  </Text>{' '}
                  {el.Rated}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Language : 
                  </Text>{' '}
                  {el.Language}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Metascore:
                  </Text>{' '}
                  {el.Metascore}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  imdbVotes:
                  </Text>{' '}
                  {el.imdbVotes}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  imdbID :
                  </Text>{' '}
                 {el.imdbID}
                </ListItem>
              
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            
            onClick={()=>{
              axios.post("https://mockserver-rny6.onrender.com/cart",{...el})
              toast({
                position:"top",
                
                description: "Movie has been added your watchlist",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }}
            
            >
            Add to Wishlist
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
          
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
   
  }
  export default SingleMovie;

  export async function getStaticProps(context) {
    let id=context.params.id
        const res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`)
      const el = await res.json()
        return {
          props:{
            el:el
          }
        }
      }
    
    
    
    
    export async function getStaticPaths() {
    
        const res = await fetch(`https://movies-database-gold.vercel.app/movies`)
      const data = await res.json()
        return {
          paths: data.map((el)=>({ params: { id: (el.id).toString() } })),
         
          fallback: false, // can also be true or 'blocking'
        }
      }