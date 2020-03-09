import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";

const News = () => {
  let newsItemList;
  let bodyText;

  const [newsItems, setNewsItems] = useState([]);
  const [expandedNewsItem, setExpandedNewsItem] = useState(null);

  const getNews = () => {
    axios.get("nyheter.json").then(response => {
      setNewsItems(response.data.reverse());
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {}, [expandedNewsItem]);

  const onClickHandler = event => {
    setExpandedNewsItem(event.target.id);
    debugger;
  };

  if (newsItems && newsItems.length > 0) {
    newsItemList = newsItems.map((newsItem, itemIndex) => {
      debugger;
      if (itemIndex === parseInt(expandedNewsItem)) {
        bodyText = newsItem.body.map(bodyParagraph => {
          return (
            <>
              <div>{bodyParagraph}</div>
              <br></br>
            </>
          );
        });
      } else {
        bodyText = newsItem.body[0].substring(0, 300) + "...";
      }
      return (
        <tr id="news-card">
          <td id="news-image-container">
            <img src={newsItem.img} id="news-image" width="100%" />
          </td>
          <td>
            <div key={itemIndex} id="news-header">
              <i>{newsItem.date}</i>
              <h5>{newsItem.title}</h5>
              <div>{bodyText}</div>
              <button id={itemIndex} onClick={onClickHandler}>
                Expand
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <Container fluid id="nyheter">
      <h1 id="section-header">NYHETER</h1>
      <Table borderless>{newsItemList}</Table>
    </Container>
  );
};

export default News;
