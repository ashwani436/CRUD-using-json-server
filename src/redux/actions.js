import * as types from "./actionType";
import API from '../api/contacts'
// import DELETE_API from "../api/delete"

export const getUsers =(users)=>({
    type:types.GET_USERS,
    payload:users,

})

export const userDeleted =()=>({
    type:types.DELETE_USERS,

})

export const userAdded =()=>({
    type:types.ADD_USER,
  

})

export  const loadUsers = ()=>{
  return function(dispatch){

      
      API.get("/users").then((res)=>{
        
     
        
          dispatch(getUsers(res.data))

      }).catch((err)=>{
          console.log("Error is",err);
        
      })
  }
}

export  const deleteUser =(id)=>{
    return function(dispatch){
  
        
        API.delete(`/users/${id}`).then((res)=>{
            
            console.log(res);
            dispatch(userDeleted());
            dispatch(loadUsers());
  
        }).catch((err)=>{
            console.log("DATA cannot deleted",err);
            //  console.log(API)
          
        })
    }
  }

  export  const addUser =(user)=>{
    return function(dispatch){
  
        
        API.post("/users",user).then((res)=>{
            
            console.log(res);
            dispatch(userAdded());
            dispatch(loadUsers());

          
  
        }).catch((err)=>{
            console.log("DATA cannot inserted",err);
          
        })
    }
  }