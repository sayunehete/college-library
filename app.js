/* 
Hi, I am create this coded this project by two Methods,
First one is "Class Method"
Second is "Function Method"

+++++++++++++++++++++++++++++++++++++++++++ BY Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



class books {
    // Class Constructor
    constructor(bookname, author, category, status) {
        this.bookname = bookname;
        this.author = author;
        this.category = category;
        this.status = status;
    }

//Function for Display Data From LocalStorage
    display() {
        let BookList = document.getElementById('showBook');
        let data = localStorage.getItem('library');
        let localData = [];

        if (data == null) {
            BookList.innerHTML = "<h3>Library is Empty</h3>";
            localData = [];
        }
        else {
            localData = JSON.parse(data);
            console.log(typeof localData);
            let html = '';
            Array.from(localData).forEach(function (element, index) {
                if (index == 0) {
                    html = `<tr>
                        <th>Sr No.</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>${index + 1}</td>
                        <td>${element.dataBook}</td>
                        <td>${element.dataAuthor}</td>
                        <td>${element.category}</td>
                        <td>${element.dataStatus}</td>
                        </tr>`;
                }
                else {
                    html += `<tr>
                        <td>${index + 1}</td>
                        <td>${element.dataBook}</td>
                        <td>${element.dataAuthor}</td>
                        <td>${element.category}</td>
                        <td>${element.dataStatus}</td>
                    </tr>`;
                }
            })
            // Manipulate DOM
            BookList.innerHTML = html;
        }
    }

// Function for delete book.
    static delBook(index) {
        let objBook = new books();
        let data = localStorage.getItem('library');
        let localData = [];
        if (data == null) {
            localData = [];
        }
        else {
            localData = JSON.parse(data);
        }
        localData.splice(index, 1);
        localStorage.setItem('library', JSON.stringify(localData));
        objBook.display();
    }

// Function to Clear input Field
    clear() {
        let clearForm = document.querySelector('form');
        clearForm.reset()
    }
// Class Books ends here.
}

// Get Elements From DOM
let name = document.getElementById('bookName');
let authorName = document.getElementById('author');
let college = document.getElementById('college');
let cooking = document.getElementById('cooking');
let english = document.getElementById('english');
let type;

// When User Click on Add Button, This Event will Fire.
let button = document.getElementById('btn').addEventListener('click', addData);
function addData(e) {
    if (college.checked) {
        type = college.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (english.checked) {
        type = english.value;
    }
    let jarvis = new books(name.value, authorName.value, type, "Available");
    let data = localStorage.getItem('library');
    let localData = [];
    if (data == null) {
        localData = [];
    }
    else {
        localData = JSON.parse(data);
    }
    let obj = {
        dataBook: name.value,
        dataAuthor: authorName.value,
        category: type,
        dataStatus: "Available"
    };
    if (name.value.length > 4 && authorName.value.length > 4 && type != null) {
        localData.push(obj);
        localStorage.setItem('library', JSON.stringify(localData));
        jarvis.clear();
        jarvis.display();
    }
    else{
        jarvis.clear();
    }
    jarvis.display();
}

// Create Object of Class Books.
let forDisplay = new books(name.value, authorName.value, type, "Available");
forDisplay.display();

// When user click on Remove Book button.
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
let doneBtn = document.getElementById('doneBtn');
removeBook.addEventListener('click', function () {
    delData.forEach(function (element, index) {
        let btn = document.getElementById(`${index}`);
        btn.style.display = 'block';
        removeBook.style.display = 'none';
        doneBtn.style.display = 'inline';
    });
});
doneBtn.addEventListener('click',function(){
    delData.forEach(function (element, index) {
        let btn = document.getElementById(`${index}`);
        btn.style.display = 'none';
        removeBook.style.display = 'inline';
        doneBtn.style.display = 'none';
    });
})


// When click on delete button, this event will fire
delData.forEach(function (element, index) {
    let book = document.getElementById(`${index}`);
    book.addEventListener('click', function () { 
        books.delBook(index);
        books.display();
    });
});






































// +++++++++++++++++++++++++++++++ By Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Same Project With Functions.


// display()
// let name = document.getElementById('bookName');
// let authorName = document.getElementById('author');
// let button = document.getElementById('btn')
// button.addEventListener('click', addData);
// let college = document.getElementById('college');
// let cooking = document.getElementById('cooking');
// let english = document.getElementById('english');


// function addData(e) {
//     e.preventDefault();
//     let type;
//     if (college.checked) {
//         type = college.value;
//     }
//     else if (cooking.checked) {
//         type = cooking.value;
//     }
//     else if (english.checked) {
//         type = english.value;
//     }

//     let data = localStorage.getItem('library');
//     if (data == null) {
//         localData = [];
//     }
//     else {
//         localData = JSON.parse(data);
//     }
//     let obj = {
//         dataBook: name.value,
//         dataAuthor: authorName.value,
//         category: type,
//         dataStatus: "Available"
//     };
//     if (name != '' && authorName.value != '' && type != null) {
//         localData.push(obj);
//         clear();
//         localStorage.setItem('library', JSON.stringify(localData));
//     }
//     display();
// }


// function display() {
//     let data = localStorage.getItem('library');
//     if (data == null) {
//         localData = [];
//     }
//     else {
//         localData = JSON.parse(data);
//     }

//     let html = '';
//     localData.forEach(function (element, index) {
//         if (index == 0) {
//             html = `<tr>
//                         <th>Book Name</th>
//                         <th>Author</th>
//                         <th>Category</th>
//                         <th>Status</th>
//                     </tr>
//                     <tr>
//                         <td>${element.dataBook}</td>
//                         <td>${element.dataAuthor}</td>
//                         <td>${element.category}</td>
//                         <td>${element.dataStatus}</td>
//                     </tr>`;
//         }

//         else {
//             html += `<tr>
//                         <td>${element.dataBook}</td>
//                         <td>${element.dataAuthor}</td>
//                         <td>${element.category}</td>
//                         <td>${element.dataStatus}</td>
//                     </tr>
//                     `;
//         }



//         // BookList.innerHTML += html;
//     });
//     let BookList = document.getElementById('showBook');
//     if (localData.length == 0) {
//         BookList.innerHTML = "<h3>Library is Empty</h3>";
//     } else {
//         BookList.innerHTML = html;
//     }

// }
// function clear() {
//     let clearForm = document.querySelector('form');
//     clearForm.reset()
// }



// function alert() {
//     let msg = document.getElementById('message');
//     if (name === '' || authorName === '' || type === '') {
//         let html = `<div class="alert-error">
//                     <strong>Sorry!</strong> Something Went Wrong, Please Try Again.
//                     </div> `
//         msg.innerHTML = html
//         setTimeout(function () {
//             msg.innerHTML = "";
//         }, 5000);
//     }
//     else {
//         let html = `<div class="alert-success">
//                                         <strong>Book</strong> has been added.
//                                     </div> `
//         msg.innerHTML = html
//         setTimeout(function () {
//             msg.innerHTML = "";
//         }, 5000);
//     }
// }