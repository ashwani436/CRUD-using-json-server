import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../redux/actions';
import { useHistory } from "react-router-dom";



function Adduser(){
    
    let history = useHistory();
    let dispatch = useDispatch();
    const[field,setField] =useState({
        name:"",
        email:"",
        company:"",
        age:""
    })
     
    const{name,email,company,age} = field;

    const handleChange =(e)=> {
        setField({
          ...field,
          [e.target.name]: e.target.value
        })
      }

     

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email || !company || !age){
            alert('Please enter all required details');
        }else{
        
        dispatch(addUser(field));
        history.push("/");
        }
        

    }
      
    return (
        <div className="container">
            <div style={{marginLeft:"450px"}} className="mt-3">
            <h3>Add User Details</h3>
            </div>
            <form style={{maxWidth:"50%",marginLeft:"300px"}} onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Name:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPassword3"
                name="name"
                value={name}
                onChange={handleChange}
                 />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"
                name="email"
                value={email}
                onChange={handleChange}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Company</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPassword3"
                name="company"
                value={company}
                onChange={handleChange}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="inputPassword3"
                name="age"
                value={age}
                onChange={handleChange}
                />
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" for="gridCheck1">
                    save 
                    </label>
                </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
            </form>
            
        </div>
    )
}

export default Adduser;
