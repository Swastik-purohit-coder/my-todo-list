const taskinput = document.getElementById("taskinput");
const catagory = document.getElementById("catagory");
const addTask = document.getElementById("addTask");
const tasklister = document.getElementById("tasklister");
const filterBtns = document.querySelectorAll(".filter-btn");

addTask.addEventListener("click", () => {
    const taskText = taskinput.value;
    const  taskCategory =catagory.value;
    if (taskText === "") return alert("the task can not be empty")
        const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-white p-2 rounded shadow";
    li.innerHTML = `
    <span> ${taskText} <span class = "text-sm text-gray-500"> (${taskCategory})</span></span>
     <div>
      <button class="done-btn text-green-600">✔</button>
      <button class="delete-btn text-red-600">🗑</button>
    </div>
  `;
  tasklister.appendChild(li);
  taskinput.value = "";
     

    
});
tasklister.addEventListener("click",(e) => {
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.parentElement.remove();

    }
    if(e.target.classList.contains("done-btn")) {
  e.target.parentElement.parentElement.classList.toggle("line-through");
}

});
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        const tasks = tasklister.querySelectorAll("li");

        tasks.forEach(task => {
            if (filter === "all" || task.innerText.includes(filter)) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        });
    });
});


darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        darkToggle.textContent = "☀️"; 
    } else {
        darkToggle.textContent = "🌙"; 
    }
});

