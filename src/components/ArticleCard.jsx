import React from "react";
import styled from "styled-components";
import { buttons, layouts } from "../styles/themeHandler";
import { useNavigate } from "react-router-dom";

const abstractExpl =
  "This is where the abstract of an article will be seen. This is so the reader knows, which content is going to be displayed. A short oultine of the article should be summarized here.";

function ArticleCard({
  title = "",
  tags = [],
  date = "99.99.2099",
  abstract = abstractExpl,
  author = "EXpl Author",
  id = 0,
}) {
  const navigate = useNavigate();
  const navigateToArticle = () => {
    navigate("/Articles/" + id);
  };

  return (
    <CardContainter onClick={() => navigateToArticle()}>
      <section className="CardTop">
        <h1>{title}</h1>
        <div className="seperator"></div>

        <label className="author">{author}</label>
        <label className="date">{date}</label>
      </section>

      <section className="cardAbstract">{abstract}
      
        <div className="seperator"></div>
      
      </section>
      <section className="CardTags">
        {tags.map((tag) => (
          <buttons.Normal key={tag}>{tag}</buttons.Normal>
        ))}
      </section>
    </CardContainter>
  );
}

export default ArticleCard;

const CardContainter = styled(layouts.ContainerLight)`
  min-height: fit-content;
  min-width: fit-content;
  width: 100%;
  padding: 2% 0% 1% 0%;
  transition: all 0.5s ease-out;
pointer-events: initial;
  cursor: pointer;
  :hover {
    transition: all 0.05s ease-in-out;
    filter: contrast(150%) brightness(90%);
  cursor: pointer;
  }

  section {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .cardAbstract {
    padding: 10px 0% 10px 0%;
  }

  .author,
  .date {
    margin-right: 15px;
  }

  button {
    min-width: fit-content;
    width: 100px;
    pointer-events: none;
  }
  label {
    font-size: 0.8em;
  }
  .CardTags{
    display:flex;
    flex-direction: row;
  }
`;
