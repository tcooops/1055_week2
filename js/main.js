// this is a self-invoking annonymous function
// also called an IIFE
// also called a module (it's a pattern)

(() => {

  console.log('hello from JS!');
      //find the elements in the docuemnt
  let toggleButton = document.querySelector(".switch-text"),
      myHeading = document.querySelector('h1');
      //svgImg = document.querySelector("#badge"),
      //svgImg2 = document.querySelector("#badge2");
      allSVGs = document.querySelectorAll('.svg')
//getting many things, use queryselectorALL (see above)! this function should

//if youre getting one thing, you can query selector one thing
//change the header text
  function changeText() {
    myHeading.textContent = "What is up? I am script!";
  }

// this function should log the ID for each SVG to the console
  function logSVG() {
    console.log(this.id);
  }

// triggers: things the user can do to make stuff happen on the page

  toggleButton.addEventListener("click", changeText);
//svgImg.addEventListener("click", logSVG);
//svgImg2.addEventListener("click", logSVG);
      //to select all, you need to do a LOOP (below). Think of groceries- a cashier needs to checkout one item at a time. Same with JS.. each element, one at a time
      allSVGs.forEach(item => item.addEventListener("click", logSVG));

  //document.querySelector('h1').textContent = "What is up? I am script!";
})();

//scripting behaviour and tying triggers so the user can do stuff with it