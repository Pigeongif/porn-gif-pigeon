<<<<<<< HEAD
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
console.log("Slug:", slug);
console.log("Data:", squareData);

const gif = squareData.find(item => item.slug === slug);

const container = document.getElementById("gifContainer");

if (gif && container) {
  container.innerHTML = `
    <video autoplay loop muted controls width="600">
      <source src="${gif.gif}" type="video/mp4">
    </video>

    <h2>${gif.title}</h2>

    <p><strong>Actress:</strong> ${gif.actress}</p>
    <p><strong>Studio:</strong> ${gif.studio}</p>

    <p>
      <a href="${gif.link}" target="_blank">
        Watch Full Video 
      </a>
    </p>
  `;
}


=======
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
console.log("Slug:", slug);
console.log("Data:", squareData);

const gif = squareData.find(item => item.slug === slug);

const container = document.getElementById("gifContainer");

if (gif && container) {
  container.innerHTML = `
    <video autoplay loop muted controls width="600">
      <source src="${gif.gif}" type="video/mp4">
    </video>

    <h2>${gif.title}</h2>

    <p><strong>Actress:</strong> ${gif.actress}</p>
    <p><strong>Studio:</strong> ${gif.studio}</p>

    <p>
      <a href="${gif.link}" target="_blank">
        Watch Full Video 
      </a>
    </p>
  `;
}


>>>>>>> f1e8a285bc7da228e72f3597bc6d7812b268f5d2
