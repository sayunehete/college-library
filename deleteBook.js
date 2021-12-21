console.log("Delete Book");

let data = localStorage.getItem('library');
let delData = [];
if (data == null) {
    delData = [];
    BookList.innerHTML = "<h3>Library is Empty</h3>";
}
else {
    delData = JSON.parse(data);
}

let removeBook = document.getElementById('delBtn');
removeBook.addEventListener('click', function () {
    delData.forEach(function (element, index) {
        let btn = document.getElementById(`${index}`);
        btn.style.display = 'block';
    });
})


btn.addEventListener('click', delBook);
function delBook(index) {
    let objBook = new books(name.value, authorName.value, type, "Available");
    let data = localStorage.getItem('library');
    let delData = [];
    localData = JSON.parse(data);

    localData.splice(index, 1);
    localStorage.setItem('library', JSON.stringify(localStorage));
    objBook.display();


}