import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { layouts, buttons, inputs, basicInputs } from "../styles/themeHandler";

function NewArticle() {
  const [Article, setArticle] = useState({
    title: "NoTitle",
    author: "NoAuthor",
    abstract: "NoAbstract",
    tags: ["tag0", "tag1"],
    date: "now",
    OBJS: ["obj0, obj1"],
  });

  const [element, setElement] = useState([
    { Add: ["text", "quote", "image", "headline", "code", "html", "latex"] },
  ]);
  const [rerender, setRerender] = useState([]);
  let currentDate = new Date();

  const createArticle = () => {
    axios
      .post(window.apiUrl+"article/", Article)
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log("Error in adding Article");
      });
  };

  const addElement = (param) => {
    var el = {};
    if (param == "quote") {
      el = {
        quote: ["enter a quote", "enter the author", "enter a description"],
      };
    }
    if (param == "headline") {
      el = { headline: "enter a headline" };
    }
    if (param == "text") {
      el = { text: "enter a text" };
    }
    if (param == "code") {
      el = {
        code: ["enter the language", "enter a description", "enter your code"],
      };
    }
    if (param == "image") {
      alert("TODO");
      return;
    }
if (param == "latex") {

      alert("TODO");
      return;
 el = {
        latex: "Enter the Text of a full Latex document"
      };
    }
if (param == "html") {
      alert("TODO");
      return;
 el = {
        html: "Enter HTML and CSS as style"
      };
    }
    const elements = element;
    elements.push(el);
    setElement(elements);
    setRerender(!rerender);
  };
  return (
    <NewArticleContainer>
      <inputs.NumberText id="title" placeholder="enter a title" />
      <inputs.NumberText id="author" placeholder="enter an Author's name" />
      <inputs.NumberText
        value={currentDate}
        id="date"
        placejolder="enter an Author's name"
      />
      <inputs.TextToList width="100%" />
      <label>Add your Posts tags</label>
      <div className="seperator"></div>

      {element.map((el, index) => (
        <>
          <div className="AddSection">
            {Object.keys(el) == "Add" && (
              <inputs.SelectCustom
                Placeholder={["select an element to add"]}
                callback={addElement}
                options={Object.values(el)[0]}
              />
            )}
            {Object.keys(el) == "text" && (
              <layouts.ContainerLight>
                <h1>Text Section</h1>
                <basicInputs.TextArea placeholder="Add a text here" value={Object.values(element[index])}/>
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "code" && (
              <layouts.ContainerLight>
                <h1>Code Section</h1>
                <basicInputs.TextNumber placeholder="Enter the language used" value={element[index]}/>
                <basicInputs.TextNumber placeholder="Enter a description" value={element[index][1]}/>
                <basicInputs.TextArea placeholder="Add your code in here" value={element[index][2]}/>
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "quote" && (
              <layouts.ContainerLight>
                <h1>Quote Section</h1>
                <basicInputs.TextNumber placeholder="enter an author" value={Object.values(element[index])} />
                <basicInputs.TextArea placeholder="enter the quote" value={Object.values(element[index])} />
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "image" && (
              <layouts.ContainerLight>
        <h1>Image Section</h1>
                <basicInputs.TextNumber placeholder="enter the title of the image" value={Object.values(el)} />
                <basicInputs.TextNumber placeholder="enter a description" value={Object.values(el)}/>
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "headline" && (
              <layouts.ContainerLight>
        <h1>Headline Section</h1>
                <basicInputs.TextNumber placeholder="enter a headline" value={Object.values(el)}/>
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "latex" && (
              <layouts.ContainerLight>
                <h1>LaTex Section</h1>
                <basicInputs.TextArea placeholder="Enter the text of a full LaTex document here" value={Object.values(el)}/>
              </layouts.ContainerLight>
            )}
            {Object.keys(el) == "html" && (
              <layouts.ContainerLight>
                <h1>HTML Section</h1>
                <basicInputs.TextArea placeholder="" value={Object.values(el)}/>
              </layouts.ContainerLight>
            )}
          </div>
        </>
      ))}
      <div className="seperator"></div>
      <buttons.Highlight onClick={() => createArticle()}>
        {" "}
        post article
      </buttons.Highlight>
    </NewArticleContainer>
  );
}

export default NewArticle;

const NewArticleContainer = styled.div`
  .AddSection {
    margin-top: 15px;
    input,
    textarea{
      max-width: calc(100% - 10px);
    }
    h1{
      margin-left: 10px;
    }
  }
`;
