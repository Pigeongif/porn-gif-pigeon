
document.addEventListener("DOMContentLoaded", function() {
const gifs = squareData;
// ===== MENU TOGGLE =====
const menuBox = document.querySelector(".menu-box");
const sidebar = document.getElementById("sidebar");

if (menuBox) {
menuBox.addEventListener("click", function() {
sidebar.classList.toggle("active");
});
}


const gifArea = document.getElementById("gifArea");

const params = new URLSearchParams(window.location.search);

const selectedStudio = params.get("studio");
const search = params.get("search");


if (gifArea) {
[...squareData]
.reverse()
.filter(item =>
  (!selectedStudio || item.studio === selectedStudio) &&
  (!search || item.title.toLowerCase().includes(search.toLowerCase()) || item.actress.toLowerCase().includes(search.toLowerCase()))
)
.forEach(item => {


const link = document.createElement("a");
link.href = "gif.html?slug=" + item.slug;

const video = document.createElement("video");
video.className = "gif-video";
video.autoplay = true;
video.loop = true;
video.muted = true;
video.playsInline = true;

const source = document.createElement("source");
source.src = item.gif;
source.type = "video/mp4";

video.appendChild(source);
link.appendChild(video);
gifArea.appendChild(link);

});
}

});

