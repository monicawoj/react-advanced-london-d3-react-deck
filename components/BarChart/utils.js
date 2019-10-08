import { range as d3range } from "d3-array";
import { randomNormal as d3randomNormal } from "d3-random";

export const getRandomData = (totalPoints = 5) =>
  d3range(totalPoints).map(d => {
    return { x: d, y: d3randomNormal()() };
  });
