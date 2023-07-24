const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const button = document.querySelector(".addBtn");

button.addEventListener('click', function()
{
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let listElement = document.createElement("li");
        listElement.innerHTML = inputBox.value;
        listContainer.appendChild(listElement);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listElement.appendChild(span);
    }

    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }

    saveData();
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("Content Saved");
}


function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
    console.log("content displayed");
}
showTask();


