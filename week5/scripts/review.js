let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.querySelector("#review-count").textContent = count;
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;