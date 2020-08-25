import React, {useState} from "react";
import { useHistory, NavLink } from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Form, Label, Input, FormGroup, Navbar, Button, Card, CardHeader,  NavItem, Nav } from 'reactstrap';

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
  }

  return (
    <>
    <div>
      <Navbar  >
        <Nav>
          <NavItem >  
          <NavLink style={{ padding: '10px', fontSize: '18px', fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} to='/'>Login</NavLink>
          </NavItem> 

          <NavItem>  
          <NavLink style={{ padding: '10px', fontSize: '18px', fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/  }}   to='/projects'>Projects</NavLink>
          </NavItem>
        </Nav>

      </Navbar>
      </div>

      <Card  style={{ margin: '5%', width: '35%', height: '400px', marginLeft: '35%', border: 'none', background: 'transparent' }}>
        
      <CardHeader style={{ border: 'none', background: 'transparent', fontSize: '50px',  fontWeight: 'bolder', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >Welcome to the Essentialism App! "Keep it simple. Do what matters."</CardHeader>
    

      <Form onSubmit={handleSubmit} >

        <FormGroup style={{  fontWeight: 'bolder',  fontSize: '20px', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >
          <Label >Username</Label>
          <Input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            placeholder='Enter Username'
            />
        </FormGroup>

        <FormGroup style={{ fontWeight: 'bolder',  fontSize: '20px', color: '#696969', /*textShadow: '2px 2px 2px #000000'*/ }} >
          <Label >Password</Label>
          <Input 
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Enter Password'
            />
        </FormGroup>

        <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '40%' }} >Submit</Button>

      </Form>
      </Card>
    </>
  );
};

export default Login;