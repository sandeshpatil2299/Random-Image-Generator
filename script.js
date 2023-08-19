const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const addImages = () => 
{
   for (let i = 0; i < 4; i++) 
   {
      const newImg = document.createElement("img");
      newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 5000)}`;
      containerEl.appendChild(newImg);
   }
}

btnEl.addEventListener("click", () => 
{
   addImages();
})