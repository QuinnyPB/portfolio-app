// let posX;
// let posY;

// let items_list = [[]];

// // get initial coordinates of items list
// function getListCoordinates(items_list) {
//   let items = document.getElementsByClassName("item");
//   for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     console.log(items[i].getBoundingClientRect());
//     items_list[i] = items[i].getBoundingClientRect();
//   }
// }
// getListCoordinates(items_list);

// // refresh coordinates of items list
// // window.addEventListener("scroll", function () {});

// function saveCursorPosition(x, y) {
//   posX = (x / window.innerWidth).toFixed(2);
//   posY = (y / window.innerHeight).toFixed(2);
//   document.documentElement.style.setProperty("--posX", posX);
//   document.documentElement.style.setProperty("--posY", posY);
// }

// let curr_item = null;
// let tab_highlighter_element = document
//   .getElementById("moving-tab")
//   .getBoundingClientRect();
// console.log("moving-tab ", tab_highlighter_element);

// window.addEventListener("mousemove", (e) => {
//   saveCursorPosition(e.clientX, e.clientY);
//   console.log(posX, posY);

//   for (item in items_list) {
//     // position check for cursor hovering over elements
//     if (
//       posY > item.top &&
//       posY < item.bottom &&
//       posX > item.left &&
//       posX < item.right
//     ) {
//       curr_item = item;
//       console.log("cursor over item ", item);
//       tab_highlighter_element.top = item.top;
//       tab_highlighter_element.bottom = item.bottom;
//       tab_highlighter_element.left = item.left;
//       tab_highlighter_element.right = item.right;
//       console.log("moving-tab ", tab_highlighter_element);
//     }
//   }
// });
