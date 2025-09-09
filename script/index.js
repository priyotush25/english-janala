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
    
    
    
        <button class="btn btn-outline btn-primary">
          <img src="./assets/fa-book-open.png" alt="" />Lesson - ${level.level_no}
        </button>
    
    
    
    `;
  });
};

loadLevel();
