import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            key={index}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item, index) => (
          <div className="item" key={index} >
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
