import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Accordion, Button } from "react-bootstrap";

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
    newsItemList = newsItems.map((newsItem, index) => {
      let bodyText = newsItem.body.map(bodyParagraph => {
        return (
          <>
            <div>{bodyParagraph}</div>
            <br></br>
          </>
        );
      });
      debugger;
      return (
        <>
          <Card key={index}>
            <Card.Header id="accordion-card-header">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index}
                id="news-header"
              >
                <h6>{newsItem.date}</h6>
                <h5>{newsItem.title}</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{bodyText}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </>
      );
    });
  }

  return (
    <Container id="nyheter">
      <h1>Nyheter</h1>
      <Accordion defaultActiveKey="0">{newsItemList}</Accordion>
    </Container>
  );
};

export default News;
