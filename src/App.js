import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Landing from './pages/landing';

function App() {
  return (
    <>
      <Landing></Landing>
    </>
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
