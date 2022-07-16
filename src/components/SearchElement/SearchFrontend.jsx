import React, {useEffect, useState } from "react";
import { simpleSimilarity } from "./simpleSimilarity";
import styled from "styled-components";
import { inputs, layouts, buttons,icons } from "../../styles/themeHandler";

const exampleArray ={
    "one": {"one": [1]},
   "two": {"two": [2, 2.1]},
   "three": {"three": [3, 3.1]},
   "four": {"four": [4, 4.1, 4.5]},
  "fourtyfour": {"fourtyfour": [44, 44.5, 44.2]},
  "fourtyfive": {"fourtyfive": [45, 45.5, 45.2]},
}
;
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}


function ElasticSearch({AvailableOptionsMap=exampleArray, callback="None",initialValue=[], CloseOnSelect=true}  ) {

    const [currentExact, setCurrentExact] = useState([]);
    const [searching, setSearching] = useState(false);
    const [currentElastic, setCurrentElastic] = useState([])
const [rerender, setrerender] = useState(false)
    const [selected, setselected] = useState(initialValue);


  const search = (e) => {

 const   searchterm= e.target.value;
 if (searchterm.length <3){
   setSearching(false);

 clearSearch();
   return
 }
 clearSearch();
 const  hits = [];

 var scores =[];
setSearching(true);
 
   for( var key in AvailableOptionsMap){
if (key.includes(searchterm)){
  hits.push(AvailableOptionsMap[key]);
  console.log("exact match ")
}
   }
    setCurrentExact(hits);
    console.log(currentExact)

const elastics =[];
for ( var key in AvailableOptionsMap){
  var score = simpleSimilarity(searchterm, key);
  elastics.push([key, score]);
  scores.push(score);
} 

scores= [...new Set(scores)];

scores.sort().reverse()
scores.slice(0,10);
const softhits = [];

setCurrentElastic([]);
for (var score in scores){
  for ( var subArr in elastics){
    if (scores[score] == elastics[subArr][1]){
      softhits.push(AvailableOptionsMap[elastics[subArr][0]])
    }
  }
}
    
console.log(elastics)
setCurrentElastic(softhits)
console.log("currentElastic")
console.log(currentElastic)

  };
  
  const addItem = (e) => {
    var items = selected;
    items.push(e);
    items= [...new Set(items)];
    setselected(items);
    if( CloseOnSelect) 
    {
      setCurrentElastic([]);
      setCurrentExact([]);
    }
    setrerender(!rerender);
  }
  
  const clearSearch = () => 
  {
    setCurrentElastic([]);
    setCurrentExact([]);
    setrerender(!rerender);
    setSearching(false)
  }
  useEffect(() => {
if (typeof callback == "function") {
      callback(selected);
    }
  }, [rerender])

  const removeItem = (el) => {
    var removeValue = el;
    var items = selected;
    const newitems =[];

for (  var i in items){
 if ( items[i] === removeValue) continue;
 newitems.push(items[i])

}
setselected(newitems)
    setrerender(!rerender);
  }

 
  
  return (
    <ElasticSearchContainer >
      <div className="centercontainer">
      <div className="elasticSearchTop">
        <inputs.NumberText  id="SearchTermInput" onChange={(e) => search(e)} />
      </div>
      <div className="matchContainer">
        
          {/*
            searching ?
              currentExact.map((el) =>

              <buttons.Highlight onClick={()=> addItem(el) } key= {"exact"+Object.keys(el)}> 
              {Object.keys(el)}
              </buttons.Highlight> 
              )
              : <></>
  */}
  {
            searching ?
              currentElastic.map((el) => 
              <buttons.Dropdown onClick= {() => addItem(el) } key={"similar"+Object.keys(el)}> 
              {Object.keys(el)}
              </buttons.Dropdown> 
              )
              : <></>
            
          }
      </div>
      <div className="seperator"></div>
      <div className="selectedContainer">
{ selected.map((el) => 
              <buttons.Normal  key={Object.keys(el)} onClick={() => removeItem(el)}> 
              {Object.keys(el)
              }
              <icons.X/>
              </buttons.Normal> 
              )
          }
      </div></div>
    </ElasticSearchContainer>
  );
        }

export default ElasticSearch;

const ElasticSearchContainer = styled(layouts.ContainerInvisible)`
  display: flex;
  justify-content: center;
  align-items: center;
  .centercontainer{
    width: 95%
  }
  input {
    width: 100%;
    margin: 5px 0px 5px 0px;
  }
  
  .seperator {
    margin: 5px 0px 5px 0px;
    width: 100%;
    height: var(--buttonBorderThickness);
    background-color: var(--seperatorColor);
    border-radius: var(--buttonBorderRadius);
  }
  .matchContainer{
    width: 100%;
    display: flex ;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;

    
  
  }
  .selectedContainer{
    width: inherit;

  display: flex;
  justify-content: left;

    button{
      width: fit-content;
      min-width: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span{
        padding: 3.5px 0px 0px 0px;
      }
    }
  }
  
`;
