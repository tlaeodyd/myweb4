window.onload = function () {
  displayVoList();
};
function createTodoBtn() {
  const title = document.querySelector("input[name=title]").value;
  const content = document.querySelector("input[name=content]").value;

  const vo = {
    title,
    content,
  };

  let arr = JSON.parse(localStorage.getItem("todoVoList"));
  if (!arr) {
    arr = [];
  }
  arr.push(vo);

  localStorage.setItem("todoVoList", JSON.stringify(arr));

  alert("등록완료");
  displayVoList();
}

function displayVoList() {
  const voListTable = document.querySelector("#voListTable");
  const tbody = voListTable.children[1];
  const voList = JSON.parse(localStorage.getItem("todoVoList"));
  const listHigh = document.getElementById("listHigh");


  listHigh.innerHTML = "";

  voList.forEach((vo, index) => {

    const itemHtml = `
          <div class="todo-item" onclick="deleteTodo(${index})">
            <h3 onclick="event.stopPropagation(); openModal(${index});">${vo.title}</h3>
            
          </div>
        `;
    listHigh.innerHTML += itemHtml;

  });

}

function openModal(index) {
  const voList = JSON.parse(localStorage.getItem("todoVoList")) || [];
  const data = voList[index];

  if (data) {
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalContent").innerText = data.content;
    document.getElementById("myModal").style.display = "block";
  }
}

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}