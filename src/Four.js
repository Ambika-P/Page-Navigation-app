import React from 'react';
import styled from 'styled-components';
import { Form, FormControl } from 'react-bootstrap';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Four = () => (
  <Form>
    
    <br></br><h2 style={{textAlign:"center"}}> Page 4</h2>
    <br></br><p style={{textAlign:"center"}}>This is the page number 4</p>
    <FormControl style={{left:"300px",textAlign:"center",textBox:"center"}} type="text" placeholder="Enter name" className="" />
      
    
  </Form>
)