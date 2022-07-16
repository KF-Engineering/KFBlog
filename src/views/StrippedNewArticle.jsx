
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";
import { layouts, buttons, inputs, basicInputs, useInput} from "../styles/themeHandler";
import {useNavigate, useParams } from "react-router-dom";

function StrippedNewArticle() {
    const navigate = useNavigate();
    const [rerender, setrerender]= useState(false);
    const params = useParams();
    const title = useInput("");
    const author= useInput("");
    const abstract= useInput("");
    const [tags, settags] = useState([]);
    const date = useInput( new Date() );
    const post = useInput("");
    const [TitlePicName, setTitlePicName] = useState("");
    const [availImgList, setAvailImgList] = useState([]);

const getThis = () =>{
    const callString = window.apiUrl +"article/"+params.id;
      axios.get(callString)
      .then(res => {
        console.log(res.data)
        title.setValue(res.data.title)
        author.setValue(res.data.author)
        settags(res.data.tags)
        date.setValue(res.data.date)
        post.setValue(res.data.OBJS[0])
        abstract.setValue(res.data.abstract)
        setTitlePicName(res.data.TitlePicName)
        setAvailImgList(res.data.AvailImgList)
      })
      .catch(err => {
        alert(err)
        console.log(err);
      })
  }

  useEffect(() => {
    getThis();
    setrerender(!rerender)
    //eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    console.log("rerendering")
  }, [rerender, availImgList, TitlePicName])
  

  
  const updateArticle= () => {
    const Article = {
        title : title.value ,
        author : author.value, 
        abstract : abstract.value,
        tags : tags,
        date : date.value, 
        TitlePicName: TitlePicName,
        OBJS : [post.value],
        AvailImgList: availImgList
    }
    console.log(Article)
    axios
      .put(window.apiUrl +"article/"+params.id,Article )
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((err) => {
        console.log("Error in adding Article");
        alert(err);
      });
      navigate("/Articles/"+params.id);
  };

  const handleTitleImage = (e) => {
    let data = new FormData();
    data.append("image", e.target.files[0]);
    axios
      .post(window.apiUrl +"single", data)
      .then((res) => {
        setTitlePicName(res.data.filename);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 const handleAddImage = (e) => {
    let data = new FormData();
    data.append("image", e.target.files[0]);
    axios
      .post(window.apiUrl +"ssingle", data)
      .then((res) => {
        const t = availImgList
        t.push(res.data.filename);
        setAvailImgList(t)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={updateArticle} encType="multipart\form-data">
    <StrippedNewArticleContainer>
      <inputs.NumberText id="title" placeholder="enter a title"  value={title.value} onChange={title.onChange}/>
      <inputs.NumberText id="author" placeholder="enter an Author's name"  value={author.value} onChange={author.onChange}/>
      <inputs.NumberText
        value={date.value} 
        onChange={date.onChange}
        id="date"
        placejolder="enter an Author's name"
      />
      <inputs.TextToList width="100%" initialValues={tags} callBack={settags}/>
      <h1>Enter an Abstract</h1>
      <basicInputs.TextArea  id="Abstract"   value={abstract.value} onChange={abstract.onChange}/>
      <h1>Text Input</h1>
      <basicInputs.TextArea  id="TextInput"   value={post.value} onChange={post.onChange}/>
      <layouts.ContainerLight>
        <label> Enter a Title Picture</label>
      <basicInputs.TextNumber
        type="file"
        accept=".png .jpg .jpeg"
        name="image"
        onChange={handleTitleImage}
        />
        <label>current Title Picture</label>
        {TitlePicName}
        <label> Add additional images to your</label>
      <basicInputs.TextNumber
        type="file"
        accept=".png .jpg .jpeg"
        name="image"
        onChange={handleAddImage}
        />
      </layouts.ContainerLight>
      {availImgList.map((name)=>(
        <span key={name}> |{name}| </span>

      ))}
     
      <div className="seperator"></div>
      <buttons.Highlight type="submit">
        {" "}
        post article
      </buttons.Highlight>
    </StrippedNewArticleContainer>
    </form>
  );
}

export default StrippedNewArticle;

const StrippedNewArticleContainer = styled(layouts.ContainerSolid)`
  .AddSection {
    margin-top: 15px;
    input
    {
      max-width: calc(100% - 10px);
    }
    h1{
      margin-left: 10px;
    }
  }
textarea{
      height: 300px;
}
`;
