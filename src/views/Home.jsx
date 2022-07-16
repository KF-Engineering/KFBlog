import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection/index"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/index"
import ElasticSearch from "../components/SearchElement/SearchFrontend";
import axios from "axios";
import { buttons } from "../styles/themeHandler";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/NavbarMain";

  

function Home() {
  const [articleList, setarticleList] = useState([""]);
  const [displayedArticles, setDisplayedArticles] = useState([""])
  const [tags, settags] = useState([]);
  const [availTags, setAvailTags] = useState([]);
  const [rerender , setRerender] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSideOnScroll = () => {
    if (window.innerWidth >= 2100) setIsSideOpen(true);
    else setIsSideOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleSideOnScroll);
    return () => window.removeEventListener("scroll", toggleSideOnScroll);
  }, []);

  const toggle = () => {
    setIsSideOpen(!isSideOpen);
  };

  ///////////////////FOR ULTRA WIDE
  let [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isNavOpen);
  const toggleNav = () => {
    if (isNavOpen) return;
    if (!isNavOpen) {
      setIsNavOpen(true);
      setTimeout(() => setIsNavOpen(false), 1500);
    }
  };

  toggleNav();
  toggleNav();
  useEffect((toggleNav) => {
    window.addEventListener("scroll", toggleNav);
    return () => window.removeEventListener("scroll", toggleNav);
  }, []);

  useEffect(() => {
    axios
      .get(window.apiUrl +"article/test")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });

    axios
      .get(window.apiUrl +"article/", articleList)
      .then((res) => {
        if (res.data.length === 0) {
          alert("No articles found");
        } else {
          setarticleList(res.data);
          setDisplayedArticles(res.data);
        }
      })
      .catch((err) => {
        console.log("Error in loading all articles!");
        return <h1>No Articles found</h1>;
      });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    computeAvailableTags();
    //eslint-disable-next-line
  }, [articleList]);


  const computeAvailableTags = () => {
    var tags = [];
    articleList.forEach((article) => {
      article.tags?.forEach((taggi) => {
        tags.push(taggi);
      });
    });
    tags = tags.reduce((obj, k, i) => ({ ...obj, [k]: {[k]:[tags[i]]} }), {});
    console.log(tags);
    setAvailTags(tags);
    setRerender(!rerender);
    
  };
  useEffect(() => {
    filterByTags()
    //eslint-disable-next-line
  }, [tags])

  const filterByTags = () => {
    var newList = [];
    if (tags?.length ===0) 
    {
      setDisplayedArticles(articleList);
      return
    }
    
    articleList.forEach((article)=>
    {
      article.tags?.forEach((taggi)=> {
        tags?.forEach((taggorius) => {   
          if (taggi === Object.keys(taggorius)[0]){
            newList.push(article)
          }
        })
      })
    })
    setDisplayedArticles(newList);
  }
  async function createNewAndForward (){
    const Article = {
      title: "NoTitle",
      author: "NoAuthor",
      abstract: "NoAbstract",
      tags: ["exapmleTag0", "ExampleTag2"],
      date: new Date(),
      OBJS: ["content"],
    };
    await axios
      .post(window.apiUrl +"article/", Article)
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log("Error in adding Article");
      });
      
        window.location.reload();

/** 
axios
      .get(window.apiUrl+"article/", articleList)
      .then((res) => {
        if (res.data.length == 0) {
          alert("No articles found");
        } else {
          setarticleList(res.data);
        }
      })
      .catch((err) => {
        console.log("Error in loading all articles!");
        return <h1>No Articles found</h1>;
      });
      setRerender(!rerender);
     const theList = articleList;
    const lastItem = theList[theList.length-1];
    //navigate("/editarticle/" + lastItem._id);
    */
  };
const navList = [
    {
      link: "home",
      Headline: "Home",
    },
    {link: "articles",
  Headline: "Articles"},
    {
      link: "contact",
      Headline: "Contact",
    }
  ]
  return (
    <div id="Scroller">

      <Sidebar isSideOpen={isSideOpen} toggle={toggle} />
      <Navbar isNavOpen={isNavOpen} toggle={toggle} navList={navList} />
 <HeroSection />
      <ElasticSearch callback={settags} AvailableOptionsMap={availTags} />

      <buttons.Highlight onClick={() => createNewAndForward()}>
        {" "}
        Create New Article
      </buttons.Highlight>
{displayedArticles.map((article) => (
        <>
          <ArticleCard
            key={article.title}
            title={article.title}
            tags={article.tags}
            date={article.date}
            abstract={article.abstract}
            author={article.author}
            id={article._id}
          />
        </>
      ))}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
