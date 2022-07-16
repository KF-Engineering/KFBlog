import React , {useEffect}from 'react'
import {basicInputs} from "../themeHandler"
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function DeletePopup({id =0 , token=-1, string="", shortCircuit=false}) {
    const navigate = useNavigate();
    useEffect(() => {
      if (shortCircuit){deleteThis(id)}
      //eslint-disable-next-line
    }, [])
    
const deleteThis = (id , token=-1) => {
    
    axios
      .delete(window.apiUrl+"article/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    navigate("/");
  };
const checkDelete = (e) => {
var str = e.target.value;
if (str === "Delete " + string){
    alert("Deleting")
    deleteThis(id);
}
  


  }
  return (
<DeleteContainer>
      <h1>
        Delete
      </h1>
      <div className="seperator">
      </div>
      Type in "Delete {string}" if you want to delete this article
      <basicInputs.TextNumber onChange={(e) => checkDelete(e)}/> 
    </DeleteContainer>
  )
}

const DeleteContainer = styled.div`
background-color: var(--containerSolidColor);
box-shadow: 10px 10px var(--alertColor) inset, 10px 10px 5px 5px var(--seperatorColor);
position: fixed;
width: 66vw;
z-index: 100;
top: 30vh;
left: 16vw;
width: 400;
height: fit-content;
z-index: 10;
padding: 20px 20px 20px 20px;
h1{
    color: var(--alertColor)
}

`

