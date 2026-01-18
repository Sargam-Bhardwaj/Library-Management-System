let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if (bookName === "" || authorName === "") {
        alert("Please enter both book name and author name");
        return;
    }

    books.push({
        bookName: bookName,
        authorName: authorName
    });

    localStorage.setItem("books", JSON.stringify(books));

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";

    displayBooks();
}

function displayBooks() {
    let tableBody = document.getElementById("bookList");
    tableBody.innerHTML = "";

    books.forEach((book, index) => {
        let row = `
            <tr>
                <td>${book.bookName}</td>
                <td>${book.authorName}</td>
                <td>
                    <button onclick="deleteBook(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

displayBooks();