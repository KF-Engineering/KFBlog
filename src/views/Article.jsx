import React from "react";
import ReactMarkdown from "react-markdown";
import Popup from "reactjs-popup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { buttons, layouts, forms, icons } from "../styles/themeHandler";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { DeletePopup } from "../styles/CLEAN/DeletePopup";

let IP = require("../UploadedImages/1656066888183_Screenshot_5.png");

function Article() {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setid] = useState(params.params);
  const [title, setTitle] = useState("NoLoad");
  const [author, setAuthor] = useState("NoLoad");
  const [date, setDate] = useState("NoLoad");
  const [abstract, setAbstract] = useState("NoLoad");
  const [tags, setTags] = useState([]);
  const [OBJS, setOBJS] = useState([]);
  const [likes, setLikes] = useState(0);
  const [other, setOther] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [rerender, setRerender] = useState(true);
  const [processedOBJS, setProcessedOBJS] = useState([]);
  const [TitlePic, setTitlePic] = useState("");

  useEffect(() => {
    var arr = [];
    var processed = [];

    OBJS.forEach((obj) => {
      //finding referenced objects
      const objects = obj.split("|");
      objects.forEach((el) => {
        processed.push(el);
      });
    });
    console.log(processed);
    setProcessedOBJS(processed);
  }, [OBJS]);

  useEffect(() => {}, [rerender]);

  const getThis = () => {
    const callString = window.apiUrl +"article/" + id;
    axios
      .get(callString)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setDate(res.data.date);
        setAbstract(res.data.abstract);
        setTags(res.data.tags);
        setOBJS(res.data.OBJS);
        setLikes(res.data.likes);
        setOther(res.data.other);
        setTitlePic(require("../UploadedImages/" + res.data.TitlePicName));
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  useEffect(() => {
    getThis();
  }, []);

  const citeThisArticle = () => {
    alert("Bibtex citing is not yet implemented TODO");
  };
  const likeThis = () => {
    alert("Not yet Implemented TODO");
  };

  const convertImage = (el) => {
    const IMG = require("../UploadedImages/"+el)
    console.log(el);
    return <img src={IMG} alt="not found" />;
  };

  return (
    <ArticleContainer>
      <ArticleHero>
        <img src={TitlePic} />
        <ArticleHeader className="ArticleHeader">
          <div className="topline"></div>
          <div className="headerSection">
            <h1>{title}</h1>
            <label className="author">
              {author} {"  "} {date}
            </label>
          </div>

          <div className="abstractSection">{abstract}</div>
          <div className="ArticleHeaderBottom">
            <buttons.Highlight onClick={() => citeThisArticle()}>
              cite this
            </buttons.Highlight>
            <buttons.Highlight
              className="LikeButton"
              onClick={() => likeThis()}
            >
              <FaRegThumbsUp />
            </buttons.Highlight>
            <buttons.Negative onClick={() => setDeleting(true)}>
              delete{" "}
            </buttons.Negative>
            <buttons.Normal onClick={() => navigate("/editArticle/" + id)}>
              Edit Article
            </buttons.Normal>
          </div>
        </ArticleHeader>
      </ArticleHero>

      <ArticleSection>
        <div className="innerArticleContainer">
          {processedOBJS.map((el) => (
            <>
              {el.includes("165")?<>{convertImage(el)}</>:
              <ReactMarkdown>{el}</ReactMarkdown>
          }
            </>
          ))}
        </div>
        <div className="TagSection">
          {tags.map((el) => (
            <buttons.Normal disable={true} className="tag" key={el}>
              {el}
            </buttons.Normal>
          ))}
        </div>
      </ArticleSection>
      {deleting && <DeletePopup string={title} id={id} token={-1} />}
    </ArticleContainer>
  );
}

export default Article;

const ArticleContainer = styled.article`
  margin: 20px 15px 20px 5px;
`;

const ArticleHeader = styled(layouts.ContainerLight)`
  height: fit-content;
  max-height: 600px;
  width: fit-content;
  max-width: 35vw;
  border: none;
  padding: 0px 15px 0px 20px;

  .topline {
    background-color: var(--highlightColor);
    width: calc(100%);
    height: 15px;
    margin: -4px 0px 0px -0px;
  }
  h1 {
    font-size: 4em;
    max-width: 30vw;
    min-width: fit-content;
  }
  .headerSection {
    margin-bottom: 20px;
  }
  label {
    font-size: 0.9em;
    color: var(--modestColor);
  }
  .ArticleHeaderBottom {
    margin: 20px 0px 10px 0px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }
  .abstractSection {
    width: 600px;
    height: fit-content;
    text-overflow: wrap;
    padding-left: 8px;
  }
`;

const ArticleHero = styled(layouts.ContainerInvisible)`
  width: 130%;
  height: 80vh;
  margin: 0px 0px 0px -15%;
  display: grid;

  img,
  .ArticleHeader {
    width: 100%;
    height: auto;
    grid-column: 1;
    grid-row: 1;
    transition: all 0.5s ease-out;
    z-index: 20;
  }
  .ArticleHeader {
    margin: 10% 5%;
    @media (max-width: 900px) {
    }
  }
`;

const ArticleSection = styled(layouts.ContainerInvisible)`
  min-height: fit-content;
  background-color: var(--containerSolidColor);
  color: var(--containerTextColor);

  .seperator {
    background-color: var(--seperatorColor);
    height: 5px;
    width: 100%;
    margin: -15px 0px 20px 0px;
    border-radius: var(--buttonBorderRadius);
  }
  blockquote {
    width: 66%;
    margin: 33px 20px 20px 16.5%;
  }

  h1 {
    margin-bottom: 0.3em;
    font-size: 2.5em;
    margin-bottom: 0.3em;
    border-bottom: 5px solid var(--highlightColor);
  }

  h2 {
    margin-top: 0.5em;
    margin-bottom: 0.1em;
    font-size: 1.5em;
  }
  li,
  ul {
    margin-left: 20px;
    list-style: square;
  }
  pre {
    background-color: var(--containerLightColor);
    padding: 5px 10px 5px 10px;
    margin-left: 2.4%;
    max-width: 95%;
    overflow-x: scroll;
  }
  .innerArticleContainer {
    margin: 20px 10px 20px 10px;
    .seperator {
      background-color: var(--highlightColor);
    }
  }
  text {
    margin-top: 0.1em;
  }
  .TagSection {
    padding-top: 4em;
    display: flex;
    justify-content: center;
    height: fit-content;
    flex-wrap: wrap;
  }
  a {
    color: var(--highlightColor);
  }
  img{
    width: 100%;
    height: auto;
  }
`;
