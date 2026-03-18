
document.addEventListener("DOMContentLoaded", function() {

 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;

      video.src = video.dataset.src;
      video.load();
      video.play();

      observer.unobserve(video);
    }
  });
}, {
  rootMargin: "500px"
});



  const gifs = [...squareData];
  console.log(gifs);
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


video.dataset.src = item.gif;
video.preload = "none";
video.loading = "lazy";
video.muted = true;
video.loop = true;
video.autoplay = true;
video.playsInline = true;

observer.observe(video);

link.appendChild(video);
gifArea.appendChild(link);


});
}

});

