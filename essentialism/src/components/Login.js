import React, {useState} from "react";
import { useHistory, NavLink } from 'react-router-dom';

<<<<<<< HEAD
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Form, Label, Input, FormGroup, Navbar, Button, Card, CardHeader,  NavItem, Nav } from 'reactstrap';
=======
// import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Form, Label, Input, FormGroup, Navbar, Button, Card, CardHeader,  NavItem } from 'reactstrap';
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde

const Login = () => {
  const [login, setLogin] = useState({ 
    username: '',
    password: ''
  })

  const { username, password } = login;
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  

  const handleChange = (e) => {
    setLogin({ 
      ...login,
      [e.target.name]: e.target.value
    })
    console.log(login);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    axiosWithAuth()
      .post(`api/auth/login`, login)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setLogin({
           username: '', password: ''
        })
        push('/projects');
      })
      .catch((err) => {
        console.log(err);
      })
=======
    // axiosWithAuth()
    //   .post(`api/login`, login)
    //   .then((res) => {
    //     localStorage.setItem('token', res.data.payload);
    //     setLogin({
    //        username: '', password: ''
    //     })
    //     push('/bubbles');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde
  }

  return (
    <>
    <div>
<<<<<<< HEAD
      <Navbar  >
        <Nav>
          <NavItem >  
          <NavLink style={{ padding: '10px', fontSize: '18px', fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} to='/'>Login</NavLink>
          </NavItem> 

          <NavItem>  
          <NavLink style={{ padding: '10px', fontSize: '18px', fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/  }}   to='/projects'>Projects</NavLink>
          </NavItem>
        </Nav>
=======
      <Navbar style={{  }} >
        <NavItem>
          <NavLink style={{ padding: '2px', margin: '10px' }} to='/'>Login</NavLink>
        </NavItem>

        <NavItem>
          <NavLink style={{ padding: '2px', margin: '3px' }}   to=''>Projects</NavLink>
        </NavItem>
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde

      </Navbar>
      </div>

<<<<<<< HEAD
      <Card  style={{ margin: '5%', width: '35%', height: '400px', marginLeft: '35%', border: 'none', background: 'transparent' }}>
        
      <CardHeader style={{ border: 'none', background: 'transparent', fontSize: '50px',  fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >Welcome to the Essentialism App! "Keep it simple. Do what matters."</CardHeader>
=======
      <Card  style={{ margin: '5%', height: '400px', marginLeft: '30%', border: 'none', background: 'transparent' }}>
        
      <CardHeader style={{ border: 'none', background: 'transparent' }} >Welcome to the Essentialism App! "Keep it simple. Do what matters."</CardHeader>
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde
    

      <Form onSubmit={handleSubmit} >

<<<<<<< HEAD
        <FormGroup style={{  fontWeight: 'bolder',  fontSize: '20px', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >
=======
        <FormGroup >
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde
          <Label >Username</Label>
          <Input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            placeholder='Enter Username'
            />
        </FormGroup>

<<<<<<< HEAD
        <FormGroup style={{ fontWeight: 'bolder',  fontSize: '20px', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >
=======
        <FormGroup >
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde
          <Label >Password</Label>
          <Input 
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Enter Password'
            />
        </FormGroup>

<<<<<<< HEAD
        <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '40%' }} >Submit</Button>
=======
        <Button style={{  background: 'lightseagreen', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ' }} >Submit</Button>
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde

      </Form>
      </Card>
    </>
  );
};

export default Login;