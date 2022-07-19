import React, {ChangeEvent, FormEvent, useState} from 'react'
import {User} from '../types/user'
import {register} from '../service/auth'


const RegisterPage = () => {
    const [form, setForm] = useState<User>({
        userName: '',
        email: '',
        password: ''
    })

    //So that we can see if something is typed and update the form

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
       const {name, value} = event.target
       setForm({...form,[name]: value})
    }

    const onSubmitHandler = (event:FormEvent<HTMLFormElement>) => {

        //To send data before page is reloaded
        event.preventDefault()
        register(form)

    }
  return (
    <form onSubmit={onSubmitHandler}>
        <div className='form-row'>
            <label>UserName</label>
            <input 
                type = "Text"
                name = "userName" 
                value={form.userName}

                //update the state of component
                onChange = {onChangeHandler}
            />
        </div>


        <div className='form-row'>
            <label>Email</label>
            <input 
                type= "email"
                name = "email" 
                value={form.email}
                onChange = {onChangeHandler}
        />
        </div>

        <div className='form-row'>
            <label>Password</label>
            <input 
                type= "password"
                name = "password" 
                value={form.password}
                onChange = {onChangeHandler}
        />
        </div>
        

    
        <div className='form-row'>  
            <button type='submit'>Send</button>
        </div>

        </form>
  )
}

export default RegisterPage