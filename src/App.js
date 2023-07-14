import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Box
        flexGrow="1"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box flex="1" textAlign="center">
          <Heading size="2xl">BTHS CRYPTO</Heading>
          <Box>
            <Text as="b" fontSize="2xl">
              Welcome to the Crypto Club, where we unravel the mysteries of the
              future of money while ensuring an enjoyable and exciting journey
              for all. Our mission is to make the world of cryptocurrencies and
              blockchain technology accessible, understandable, and entertaining
              for everyone.
            </Text>
          </Box>
          <Box>
            <Button>Join</Button>
          </Box>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/hero_crypto.jpg"
            alt="Cryptocurrency"
            maxW="100%"
            h="auto"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box flex="1" textAlign="center">
          <Heading size="2xl">Why Learn Crypto?</Heading>
          <Box>
            <Text as="b" fontSize="2xl">
              With the increasing adoption of blockchain technology, learning
              crypto opens doors to exciting career opportunities in various
              sectors such as finance, technology, entrepreneurship, and beyond,
              positioning individuals at the forefront of innovation in the
              digital era.
            </Text>
          </Box>
          <Box>
            <Button>Join the Fun</Button>
          </Box>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/second_image.jpg"
            alt="Second Image"
            maxW="100%"
            h="auto"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/users');
//         setUsers(response.data.users); // Assuming the response data has a 'users' property
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {users.length > 0 ? (
//         users.map((user, i) => <div key={i}>{user.name}</div>)
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

export default App;
