const baru = document.getElementById("label");
const add = document.getElementById("button-addon2");
const list = document.getElementById("list");

add.onclick = function(){
    var nilai = baru.value;
    baru.value ="";
    
        if(nilai == ""){
            return
        }

    const listItem = document.createElement("li");
    const tombolDelete = document.createElement("button");

    tombolDelete.setAttribute("id","delete");

    listItem.innerText = nilai;
    tombolDelete.innerText = "Hapus";
    listItem.appendChild(tombolDelete);
    list.appendChild(listItem);
    
    tombolDelete.onclick = function(){
        list.removeChild(listItem);
    }
}