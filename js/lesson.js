// ==========================================
// GERBOO TRADING ACADEMY
// LESSON PROGRESS
// ==========================================

const completeLesson = document.getElementById("completeLesson");

if (completeLesson) {

    completeLesson.addEventListener("click", () => {

        completeLesson.innerHTML = `
            <i class="fas fa-check"></i>
            Completed
        `;

        completeLesson.classList.add("completed");

        completeLesson.disabled = true;

        console.log("Lesson 1 completed!");

    });

}