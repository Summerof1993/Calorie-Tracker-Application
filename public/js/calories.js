const calories = document.querySelector("#calories").value.trim();
const mealName = document.querySelector("#mealName").value.trim();

const caloriesFormHandler = async (event) => {
    event.preventDefault();

    if (calories && mealName) {
        const response = await fetch("/user/")
    }
}