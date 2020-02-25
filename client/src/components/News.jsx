import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

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

  if (newsItems && newsItems.length > 0) {
    newsItemList = newsItems.map((newsItem, itemIndex) => {
      const bodyTextTruncated = newsItem.body[0].substring(0, 300);
      return (
        <Row id="news-card">
          <Col md={4} id="news-image-container">
            <img src={newsItem.img} id="news-image" />
          </Col>
          <Col>
            <div key={itemIndex} id="news-header">
              <i>{newsItem.date}</i>
              <h5>{newsItem.title}</h5>
              <div>{bodyTextTruncated}...</div>
            </div>
          </Col>
        </Row>
      );
    });
  }

  return (
    <Container fluid id="nyheter">
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>NYHETER</h1>
        </Col>
      </Row>
      {newsItemList}
    </Container>
  );
};

export default News;
