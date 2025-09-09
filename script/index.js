const displayContainer = document.getElementById("display-box");
const lessonContainer = document.getElementById("lesson-container");

// load level
const loadLevel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLevel(data.data));
};

// display level
const displayLevel = (levels) => {
  levels.forEach((level) => {
    lessonContainer.innerHTML += `
    
        <button onclick="loadWord(${level.level_no})" class="btn btn-outline btn-primary" id=${level.id}>
          <img src="./assets/fa-book-open.png" alt="" />Lesson - ${level.level_no}
        </button>
    `;
  });
};

// select lesson
lessonContainer.addEventListener("click", (e) => {
  let btns = e.target.tagName === "BUTTON";
});

// word by level
const loadWord = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((data) => displayWord(data.data));
};

// display level
const displayWord = (words) => {
  displayContainer.innerHTML = "";

  words.forEach((word) => {
    displayContainer.innerHTML += `
    
      <div
          class="bg-white py-12 px-10 rounded-lg flex flex-col items-center justify-center w-full"
        >
          <div class="text-center">
            <h1 class="text-3xl font-bold">${word.word}</h1>
            <p class="text-xl font-medium my-6 font-bangla">${word.pronunciation}</p>
            <h2 class="text-3xl font-medium font-bangla">${word.meaning}</h2>
          </div>
          <div class="flex items-center justify-between w-full mt-12">
            <i class="fa-solid fa-circle-exclamation"></i>
            <i class="fa-solid fa-volume-high"></i>
          </div>
        </div>
    
    
    
    `;
  });
};

loadLevel();
