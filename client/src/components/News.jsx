import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const News = () => {
  let newsItemList;
  const [newsItems, setNewsItems] = useState([]);

  const getNews = () => {
    axios.get("nyheter.json").then(response => {
      setNewsItems(response.data.reverse());
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {}, [newsItems]);

  if (newsItems && newsItems.length > 0) {
    newsItemList = newsItems.map(newsItem => {
      debugger;
      return (
        <>
          <h4>{newsItem.date}</h4>
          <h3>{newsItem.title}</h3>
          <div>{newsItem.body}</div>
        </>
      );
    });
  }

  return (
    <Container id="news">
      <Row>
        <h1>Nyheter</h1>
        <div>{newsItemList}</div>
      </Row>
    </Container>
  );
};

export default News;
