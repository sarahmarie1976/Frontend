import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Card, Col, Row, CardHeader } from 'reactstrap';


const Projects = () =>{

    const [checked, setChecked] = useState({
        isChecked: false
    })

    

        return (

            
            <Form  style={{ margin: '5%', marginLeft: '20%' }}>

              <Card style={{border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000', marginRight: '25%'   }}  >
                <CardHeader style={{border: 'none', background: 'transparent', fontSize: '30px', fontWeight: 'bolder' }}  >
                  Select up to three Values for your project:
                </CardHeader>
              </Card>

              <Row>
                <Col sm="1.8">
              <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000',  }} >
             
              <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                  <Input type="checkbox" id='1'  />  Authenticity 
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Achievement
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Adventure
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Authority
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Autonomy
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Balance
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Beauty
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Boldness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Career
                </Label>

                </FormGroup>
                </Card>
                </Col>

                <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000' }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

                <Label check>
                   <Input type="checkbox" /> Challenge
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Citizenship
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Compassion
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Community
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Competency
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Contribution
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Creativity
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Curiosity
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Determination
                </Label>

                </FormGroup>
                </Card>
                </Col>

                <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly', border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000'}} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                  <Input type="checkbox" /> Fairness
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Faith
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Fame
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Family
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Friendships
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Fun
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Growth
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Happiness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Health
                </Label>

                </FormGroup>
                </Card>
                </Col>

              <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000' }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                   <Input type="checkbox" /> Honesty
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Humor
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Influence
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Inner Harmony
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Justice
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Kindness
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Knowledge
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Leadership
                </Label>
              
                </FormGroup>
                </Card>
                </Col>

            <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent' , color: '#DCFFDB', textShadow: '2px 1px 2px #000000'}} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

            <Label check>
                   <Input type="checkbox" /> Learning
                </Label>

                <Label check>
                  <Input type="checkbox" /> Love
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Loyalty
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Meaningful Work
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Openness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Optimism
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Peace
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Pleasure
                </Label>
              
                
                </FormGroup>
                </Card>
                </Col>

              <Col sm="1.8">
              <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000' }} >

              <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

              <Label check>
                   <Input type="checkbox" /> Poise
                </Label>
             
                <Label check>
                  <Input type="checkbox" /> Popularity
                </Label>


                <Label check>
                   <Input type="checkbox" /> Recognition
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Religion
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Reputation
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Respect
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Responsibility
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Security
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Self-Respect
                </Label>
                

                </FormGroup>
                </Card>
                </Col>

            <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly', border: 'none', background: 'transparent', color: '#DCFFDB', textShadow: '2px 1px 2px #000000'}} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
              
                <Label check>
                  <Input type="checkbox" /> Service
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Spirituality
                </Label>

                <Label check>
                  <Input type="checkbox" /> Stability
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Success
                </Label>
             
                <Label check>
                  <Input type="checkbox" /> Status
                </Label>
            
                <Label check>
                   <Input type="checkbox" /> Trustworthiness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Wealth
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Wisdom
                </Label>
                </FormGroup>
                </Card>

                </Col>
               </Row> 




              <FormGroup style={{ width: '40%', margin: '2%', marginLeft: '22%', color: '#DCFFDB', fontWeight: 'bolder', textShadow: '2px 1px 2px #000000', fontSize: '20px' }} >
                <Label >Project Title</Label>
                <Input type='text' name='title' placeholder='Project Title Here' />
              </FormGroup>

              <FormGroup style={{ width: '40%', margin: '2%', marginLeft: '22%', color: '#DCFFDB', fontWeight: 'bolder', textShadow: '2px 1px 2px #000000', fontSize: '20px' }} >
                <Label >Project Description</Label>
                <Input Input type="textarea" name="text" placeholder='Enter Description Here' />
              </FormGroup>

              <FormGroup row style={{ width: '60%', margin: '3%', marginLeft: '35%', color: '#DCFFDB', fontWeight: 'bolder', textShadow: '2px 1px 2px #000000', fontSize: '20px' }} >
                <Label for="importance">Level of Importance</Label> 
                <Col sm={10}>
                  <Input  style={{ width: '8%', margin: '1%', marginLeft: '8%' }} type="select" name="select" id="importance"  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Input>

                </Col>
            </FormGroup>

              <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '20%',margin: '2%', marginRight: '18%',   }} >Submit</Button>
              
             
            </Form>
          );
        }


export default Projects;