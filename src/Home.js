import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Home = () => (
  <Form>
    
    <br></br><h2 style={{textAlign:"center"}}> Page 1</h2>
    <br></br><p style={{textAlign:"center"}}>This is the page number 1</p>
    
        
    <FormControl style={{left:"300px",textAlign:"center",textBox:"center"}} type="text" placeholder="Enter name" className="" />
      
    
  
    
  </Form>
)