import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  // const getData = async () => {
  //   const mainData = await axios.get('http://localhost:4000/courses')
  //   setData(mainData.data);
  // }

  const newenv = import.meta.env
  const getData = async () => {
    try {
      const response = await axios.get(newenv.VITE_URL);
      

      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData()
  },[])

//   return data ?(
//    <>
//     {/* {
//       data.map((val, index) => {
//         return(
//           <>
//           <h1 key={index + 1}>{val.id }</h1>
         
//           </>
//         )
//       })
//     } */}

// <table className="table-auto">
//   <thead>
//     <tr>
//       <th className="px-4 py-2">Course ID</th>
//       <th className="px-4 py-2">Course Name</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((val) => (
//       <tr key={val.id}>
//         <td className="border px-4 py-2">{val.id}</td>
//         <td className="border px-4 py-2">{val.courseName}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
//    </>
//   ) : (<h1>Loading</h1>)

return (
  <>
  <table className="table-auto">
   <thead>
     <tr>
       <th className="px-4 py-2">Course ID</th>
       <th className="px-4 py-2">Course Name</th>
     </tr>
   </thead>
   <tbody>
     {data.map((val) => (
      <tr key={val.id}>
        <td className="border px-4 py-2">{val.id}</td>
        <td className="border px-4 py-2">{val.courseName}</td>
      </tr>
    ))}
  </tbody>
</table>
  </>
);
}

export default App
