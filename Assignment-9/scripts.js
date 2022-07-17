var x = document.getElementById("audio1");
var y = document.getElementsByClassName("icon")[0];
var z = document.getElementById("video1");
console.log(x);
console.log(y);
y.onclick = function () {
  console.log("Icon Tapped");
  y.style.color = "blue";
  x.pause();
};
window.onscroll = function () {
  z.setAttribute("src", "videoplayback.mp4");
};

document.addEventListener("visibilitychange", stopVideo);

function stopVideo() {
  if (document.hidden) {
    document.getElementById("video1").pause();
  } else {
    document.getElementById("video1").play();
  }
}
