document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-img");
  const text = document.querySelector(".hero-text");

  // Show images one by one
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("show");
    }, index * 1000); // delay each image by 1s
  });

  // Show text after images
  setTimeout(() => {
    text.classList.add("show");
  }, images.length * 1000 + 500); // text appears after all images
});

// Intersection Observer for About Me section
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll(".about-img, .about-text");
  hiddenElements.forEach(el => observer.observe(el));
});

// Reveal education cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const eduCards = document.querySelectorAll(".timeline-card");

  const eduObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  eduCards.forEach(card => eduObserver.observe(card));
});


// Reveal skill-group and project-group using the same observer
document.addEventListener("DOMContentLoaded", () => {
  const itemsToReveal = document.querySelectorAll(".skill-group, .project-group");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  itemsToReveal.forEach(item => observer.observe(item));
});

// Skill descriptions
const skillDescriptions = {
  "Python": "Versatile language for data analysis, scripting, and machine learning.",
  "SQL": "Query language for relational databases. Used for data extraction & joins.",
  "Power BI": "Microsoft BI tool for dashboards and reports.",
  "Tableau": "Visual analytics platform for data storytelling.",
  "Pandas": "Python library for manipulating structured data using DataFrames.",
  "NumPy": "Efficient numerical computing and array operations.",
  "Scikit-learn": "Machine learning in Python – models, preprocessing, evaluation."
};

// Open popup on click (sửa đúng class selector thành .skill)
document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
    const name = skill.innerText.trim();
    const description = skillDescriptions[name] || "No description available.";

    let popup = document.getElementById("skillPopup");
    if (!popup) {
      // Tạo popup nếu chưa có
      popup = document.createElement("div");
      popup.id = "skillPopup";
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.background = "rgba(0, 0, 0, 0.7)";
      popup.style.display = "flex";
      popup.style.justifyContent = "center";
      popup.style.alignItems = "center";
      popup.style.zIndex = "1000";
      popup.innerHTML = `
        <div style="
          background: white; 
          padding: 30px; 
          width: 400px; 
          height: 150px; 
          border-radius: 10px; 
          color: black; 
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        ">
          <h2 id="skillTitle" style="margin-bottom: 10px;"></h2>
          <p id="skillDescription" style="font-size: 1em; line-height: 1.4em;"></p>
          <button onclick="closePopup()" style="
            position: absolute; 
            top: 5px; 
            right: 5px; 
            background: none; 
            border: none; 
            font-size: 20px; 
            cursor: pointer;
          ">✖</button>
        </div>
      `;

      document.body.appendChild(popup);
    }

    document.getElementById("skillTitle").innerText = name;
    document.getElementById("skillDescription").innerText = description;
    popup.style.display = "flex";
  });
});

// Close popup
function closePopup() {
  const popup = document.getElementById("skillPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

// Reveal project section on scroll
const projectGroups = document.querySelectorAll(".project-group");

projectGroups.forEach(group => {
  skillObserver.observe(group);  // dùng chung observer với skill
});
