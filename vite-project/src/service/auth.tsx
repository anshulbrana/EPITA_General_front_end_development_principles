import {User} from '../types/user'
import axios from 'axios'

//This file is doing the request
export const register = async (data: User) =>{
    // console.log(data)

    try{
        const res = await axios.post('http://localhost:4500/register', data)
        console.log(res)
    }
    catch(error: any){
        console.error(error.response.data.msg)

    }
}