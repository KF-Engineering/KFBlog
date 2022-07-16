
import { basic } from "../themeHandler";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import XOut from "./X-out.svg";





function InputSelectToList({ 
  setvalues, 
  initialValues=[], 
  options, 
  maxEls="infinite", 
  ElsPerRow=3, 
  maxDropDownHeight="inherit" ,
  maxDropDownWidth="inherit" 
}) 
  {
  const [ListItems, setListItems] = useState(initialValues);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    setRerender(!rerender);
    console.log("rerender");
  }, [ListItems]);


  var listwidth= 90 / ElsPerRow + "%";

  const handleAddItem = (value) => {

    if (ListItems.length >= maxEls){
      alert("cannot insert more than "+maxEls+" Items." )
      return
    }
    var items = ListItems;
    if (typeof(items) == 'undefined'){
      items=[];
    }
    
    items.push(value);
    setListItems(items);
    if(typeof(setInputSelectToList)== "function"){
      setvalues(items);}

    console.log(ListItems);
    console.log(ListItems.length);
    setRerender(!rerender);
  };

  const handleRemoveItem = (value) => {
    console.log(value);

    function checkequals(el) {
      console.log(el);
      console.log(value);
      console.log(el == value);
      return el !== value;
    }

    setListItems((list) => list.filter(checkequals));

    console.log(ListItems);
  };

  return (
    <InputSelectToListContainer className="InputSelectToListCreator" ElsPerRow={ElsPerRow}>
    
    <div className="topSection">
          <basic.InptSlctCstm
                      options={options}
                      onSelect={handleAddItem}
                      maxDropDownHeight={maxDropDownHeight}
                      maxDropDownWidth={maxDropDownWidth}
                    />
      </div>
      <div className="AddListLower">
      {ListItems?.map((InputSelectToList, index) => (
                 
                  <button onClick={() => handleRemoveItem(InputSelectToList)}>
                    {InputSelectToList}
                  </button >
            ))}

      </div>
     
    </InputSelectToListContainer>
  );
}

export default InputSelectToList;

const InputSelectToListContainer = styled.div`
  margin-top: 2%;
  border-radius: 5px;
  padding: 0px 10px 0px 5px;
  border: 2px solid var(--backgroundTextColor);
  width: ${(props) => (props.width ? props.width : "265px")};
  height: ${(props) => (props.height ? props.height : "380px")};
  display: flex;
  flex-direction: column;
 
  .topSection{
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    width: 98%;
    height: 50px;
    border-bottom: 2px solid var(--seperatorColor);
  }
  .AddListLower{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 5px;
    width: 100%;
  }
  button{
    margin: 5px 5px 5px 5px;
    height: ${(props) => (props.height ? props.height : " 40px ")};
    width: ${(props) => (props.width ? props.width : " fit-content ")};
    background-color: var(--modestColor);
    color: var(--normalTextColor);
    padding: 8px 30px 10px 5px;
    border-radius: 10px;
    font-size: 17px;
    text-decoration: none;
    border-style: solid;
    align-items: center;
    text-align: left;
    word-break: keep-all;
    :hover {
      transition: all 0.2s ease-in-out;
      background-color: var(--modestHoverColor);
      cursor: pointer;
    }
    border-color: var(--highlightColor);
    background-image: url(${XOut});
    background-repeat: no-repeat;
    background-position: 90% 45%;
  }

`;

