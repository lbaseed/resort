import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of",
      },

      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        info:
          "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of",
      },

      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of",
      },

      {
        icon: <FaBeer />,
        title: "Strongest Drink",
        info:
          "lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item,index) => { return <article key={index} className="service">
              <span>{item.icon} </span>
              <h6>{item.title} </h6>
              <p>{item.info} </p>
          </article> })}
        </div>
      </section>
    );
  }
}
