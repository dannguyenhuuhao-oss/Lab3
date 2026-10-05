function themCongViec() {

    var task = document.getElementById("task").value.trim();

    if (task == "") {

        alert("Vui lòng nhập công việc");

        return;
    }

    var li = document.createElement("li");

    li.innerHTML =
        task +
        " <button onclick='xoaCongViec(this)'>Xóa</button>";

    li.onclick = function () {

        this.classList.toggle("done");

    };

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}


// Xóa công việc
function xoaCongViec(button) {

    button.parentElement.remove();

}