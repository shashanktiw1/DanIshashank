const shashank = true;

let a = 0;

while (shashank === true) {
  a++;
  console.log(a);
  let style1 = document.getElementsByClassName("frame");
  style1.style.backgroundImage = `conic-gradient(from ${a}deg at 50% 50%, #FF0000 0deg, #F49220 360deg)`;
}
