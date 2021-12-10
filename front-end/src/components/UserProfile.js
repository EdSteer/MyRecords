// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router'
// // import { getPayload } from './helpers/auth'
// import RecordCard from './RecordCard'
// import { userIsAuthenticated } from './helpers/auth'

// const UserProfile = () => {
//   const [userProfile, setUserProfile] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const Navigate = useNavigate()

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const token = window.localStorage.getItem('token')
//         if (!token) throw new Error()
//         if (!userIsAuthenticated()) throw new Error()
//         const header = { 'Authorization': `Bearer ${token}` }
//         const { data } = await axios.get('/api/auth/user', { headers: header })
//         setUserProfile(data)
//         setIsLoading(false)
        
//       } catch (err) {
//         console.log(err)
//         setIsLoading(false)
//         Navigate('/')
//       }
//     }
//     getUserData()
    
//   }, [Navigate])

//   return (
//     <>
//       <section className="section my-profile">
//         <div className="container">
//           <div className="page-title">
//             <h2>{userProfile.fullName}</h2>
//             <hr></hr>
//           </div>
//         </div>
//       </section>
//       <section className="section my-recipes">
//         <div className="container">
//           <div className="my-recipes-title">
//             <h3>Records I have added</h3>
//           </div>
//           <div className="my-recipes-container">
//             {userProfile.createdRecords && userProfile.createdRecords.length ? 
//               <div className="container" id="index-cards">
//                 <div className="columns is-multiline is-flex">
//                   {userProfile.createdRecords.map(record => {
//                     return (
//                       <RecordCard key={record.id} {...record}  />
//                     )
//                   })}
//                 </div>
//               </div> 
//               :
//               <div className="container is-flex is-justify-content-center">
//                 <h3>{isLoading ? 'Loading...' : 'You have not created any records!'}</h3>
//               </div>
//             }
      
//           </div>
//           <hr></hr>
//         </div>
//       </section>
//     </>
//   )
// }

// export default UserProfile