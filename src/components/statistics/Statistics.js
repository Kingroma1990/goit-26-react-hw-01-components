import React from "react";
import PropTypes from "prop-types";
import styleStat from "./Statistics.module.css";


function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}
const color = generateColor()
console.log(color)

const Statistics = ({ stats, title }) => (
  <section className={styleStat.statistics}>
    <h2 className={styleStat.title}>{title}</h2>
    <ul className={styleStat.statList} >
      { stats.map((Statistic ) => (
        <li className={styleStat.item} key={Statistic.id} style={{background:`${color}`}}>
          <span className={styleStat.label} >{Statistic.label}</span>
          <span className={styleStat.percentage}>{Statistic.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};



export default Statistics;
