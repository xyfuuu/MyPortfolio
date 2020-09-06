// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random info to the page.
 */
function addRandomInfo() {
  const infos =
      ["I'm a student at Dalian University of Technology.", 
       "The pronunciation of my Chinese name is similar to '复习英语'(Review English).",
       "Balsam pear is my favourite vegetable.",
       "I play table tennis with my left hand, but eat with my right hand.",
       "I am now trying to be a good setter in volleyball game.",
       "I love stamp and postmark collecting.",
       "Carpaccio with raw eggs tastes amazing!",
       "Onmyoji is the best game in the world!",
       "I'm interested in quantum information recently."];

  // Pick a random info.
  const info = infos[Math.floor(Math.random() * infos.length)];

  // Add it to the page.
  const infoContainer = document.getElementById('info-container');
  infoContainer.innerText = info;
}

/**
 * Fetches comments from the server and adds it to the DOM.
 */
window.onload = function() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('comment-container');
    commentListElement.innerHTML = '';
    for(var i = 0; i < comments.length; i ++){
      commentListElement.appendChild(
          createListElement(comments[i].author + ': ' + comments[i].content));
    }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.083, lng: 121.800 },
    zoom: 8
  });
}
