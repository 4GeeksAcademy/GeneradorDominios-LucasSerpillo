/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["The", "Our", "Its", "His"];
let adj = ["Great", "Big", "Smart", "Bad"];
let noun = ["Jogger", "Racoon", "Money", "Street"];

window.onload = function() {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        console.log(pronoun[p] + "-" + adj[a] + "-" + noun[n] + ".com");
      }
    }
  }
};
