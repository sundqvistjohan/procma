import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const News = () => {
  let newsItemList;
  let bodyText;

  const [newsItems, setNewsItems] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentNews, setCurrentNews] = useState("");

  const getNews = () => {
    axios.get("nyheter.json").then(response => {
      setNewsItems(response.data.reverse());
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    renderNewsItem(currentNewsIndex);
  }, [newsItems]);

  useEffect(() => {
    renderNewsItem(currentNewsIndex);
  }, [currentNewsIndex]);

  useEffect(() => {}, [currentNews]);

  if (newsItems && newsItems.length > 0) {
    newsItemList = newsItems.map((newsItem, itemIndex) => {
      return (
        <>
          <div
            key={itemIndex}
            id="news-header"
            style={{
              backgroundColor:
                itemIndex === currentNewsIndex ? "#8fe3ff" : "white"
            }}
            onClick={() => setCurrentNewsIndex(itemIndex)}
          >
            <h6>{newsItem.date}</h6>
            <h5>{newsItem.title}</h5>
          </div>
        </>
      );
    });
  }

  const renderNewsItem = currentNewsIndex => {
    if (newsItems && newsItems.length > 0) {
      bodyText = newsItems[currentNewsIndex || 0].body.map(bodyParagraph => {
        return (
          <>
            <div>{bodyParagraph}</div>
            <br></br>
          </>
        );
      });
    }
    setCurrentNews(bodyText);
  };

  return (
    <Container fluid id="nyheter">
      <h1>Nyheter</h1>
      <Row>
        <Col md={4}>{newsItemList}</Col>
        <Col style={{ backgroundColor: "#8fe3ff" }}>{currentNews}</Col>
      </Row>
    </Container>
  );
};

export default News;
