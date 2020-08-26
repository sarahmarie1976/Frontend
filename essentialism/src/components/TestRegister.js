import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const TestRegister = props => {
    const history = useHistory();
    const [register, setRegister] = useState({
      name: '',
      username:'',
      password:''  
    })

    const handleChange = e => {
        setRegister({ 
            ...register, [e.target.name]: e.target.value
            
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e, data) =>{
        e.preventDefault()
        axiosWithAuth()
        .post('/auth/register',data)
        .then(res =>{
            console.log("success, you have successfully register",res)
            props.history.push('/login')
        }) 
        .catch(err => console.log(err))
    }

    return  (
        <div className="register">
<h3> Please register your account</h3>

<form onSubmit={handleSubmit}>
    <label> Name</label>
<input 
type="text"
name="name"
label="name"
value={register.name}
className="input"
 onChange={handleChange}
/>
<label> Username </label>
<input 
type="text"
name="username"
label="username"
value={register.username}
className="input"
 onChange={handleChange}
/>
 <label> Password </label>
<input 
type="password"
name="password"
label="password"
value={register.password}
className="input"
 onChange={handleChange}
/>
 
<button type="submit"> Register </button>
 
      </form>

        </div>
    )

}

export default TestRegister


// test un: user1@gmail.com
// test pw:  123456789

