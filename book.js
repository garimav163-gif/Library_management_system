 const books = [
      { title: "Thermodynamics", author: "Yunus Çengel", },
      { title: "Mechanics of Materials", author: "R.C. Hibbeler",},
      { title: "Control Systems Engineering", author: "Norman Nise", },
      { title: "Engineering Circuit Analysis", author: "William Hayt", },
      { title: "Signals and Systems", author: "Alan V. Oppenheim", },
      { title: "Digital Logic Design", author: "M. Morris Mano", },
      { title: "Fluid Mechanics", author: "Frank White", },
      { title: "Structural Analysis", author: "R.C. Hibbeler", },
      { title: "Electrical Machines", author: "P.S. Bimbhra"},
      { title: "Strength of Materials", author: "S. Ramamrutham" },
    ];

    // Add 96 more books dynamically
    for (let i = 11; i <= 106; i++) {
      books.push({
        title: `Engineering Book ${i}`,
        author: `Author ${i}`,

      });
    }

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search');

    function renderBooks(bookArray) {
      bookList.innerHTML = '';
      bookArray.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `

          <h3>${book.title}</h3>
          <p>${book.author}</p>
        `;
        bookList.appendChild(div);
      });
    }

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
      renderBooks(filteredBooks);
    });

    // Initial render
    renderBooks(books);