import {useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore" 
import {db} from "../../Firebase"
function WidgetsContainer()
{
    const [searchUser,setSearchUser]=useState("")
    const [AllUsers,setAllUsers]=useState([])
    const [searchResUsers,setSearchResUsers]=useState()

    // for input search
    const handleOnChange=(e)=>
    {
      setSearchUser(e.target.value)
    }
  
    // for keypress Input
    const handleSubmittingSearch = async(e) =>
    {
      let wrappedList=AllUsers;
      if(searchUser)
      {
        wrappedList = AllUsers.filter(user => user.data.username.search(searchUser.toLowerCase().trim()) > -1);
      }
      setSearchResUsers(wrappedList)
    }
  
    // for all users
    const getAllUsers=async()=>
    {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        setAllUsers(prev=> {return [...prev,{id:doc.id,data:doc.data()}]})
      });
    }
  
    useEffect(()=>
    {
      getAllUsers();
    },[])

    return {handleOnChange,handleSubmittingSearch,searchResUsers,searchUser}
}
export default WidgetsContainer