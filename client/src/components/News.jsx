import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";
import { ArrowUpShort, ArrowDownShort } from "react-bootstrap-icons";

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
    event.currentTarget.id === expandedNewsItem
      ? setExpandedNewsItem(null)
      : setExpandedNewsItem(event.currentTarget.id);
  };

  if (newsItems && newsItems.length > 0) {
    newsItemList = newsItems.map((newsItem, itemIndex) => {
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
        <tr class="news-card" id={itemIndex} onClick={onClickHandler}>
          {itemIndex === parseInt(expandedNewsItem) ? null : (
            <>
              <td id="news-image-container" style={{ backgroundImage: `url(${newsItem.img})`}} />
            </>
          )}
          {itemIndex === parseInt(expandedNewsItem) ? (
            <td colspan="2" style={{ padding: "2% 10% 2% 10%" }}>
              <div key={itemIndex} id={itemIndex}>
                <i>{newsItem.date}</i>
                <h5>{newsItem.title}</h5>
                <div style={{ padding: "2%" }}>{bodyText}
                <img src={newsItem.img} id="news-image-full" />
                </div>
                <Button variant="link" block style={{ paddingBottom: "0" }}>
                  <ArrowUpShort size={42} />
                </Button>
              </div>
            </td>
          ) : (
            <td style={{ padding: "20px 20px 0 30px" }}>
              <div key={itemIndex} id={itemIndex}>
                <span>{newsItem.date}</span>
                <h5>{newsItem.title}</h5>
                <div>{bodyText}</div>
                <Button variant="link" block>
                  <ArrowDownShort size={42} />
                </Button>
              </div>
            </td>
          )}
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
