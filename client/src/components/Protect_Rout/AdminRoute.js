//-----step 2------ Protect Rout URL Admin 
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'           
import LoadingToRedirect from './LoadingToRedirect' 
import { currentAdmin } from '../functions/auth'   


const AdminRoute = ({children}) => {
    //get data in Redux       
    const { user } = useSelector((state)=> ({...state})) 
    const [ok, setOk] = useState(false) 
   
    useEffect(()=>{

    if(user && user.token){
        currentAdmin(user.token) //function currentAdmin check roll user
        .then(res=>{
            //console.log(res)
            setOk(true) //if addmin set เป็น true
        }).catch(err=>{
            console.log(err)
            setOk(false)//if not addmin set เป็น false
        })
    }   
    },[user])
    

    return ok //if ok
    ? children               //if ok = true go to  <HomeAdmin /> 
    : <LoadingToRedirect /> // if ok = false redirect to "/"
}
export default AdminRoute
