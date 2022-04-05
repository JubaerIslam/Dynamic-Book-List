
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const button = document.getElementById("button");

    
   button.addEventListener("click", function(e) {

    e.preventDefault();

      if ( title.value == " " || author.value == " " || year.value == " ") {
          alert("Please Fill The All Blank Forms");

      }else {
        const newRow = document.createElement("tr");
        bookList.appendChild(newRow);
  
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
  
        const newAthour = document.createElement("th");
        newAthour.innerHTML = author.value;
        newRow.appendChild(newAthour);
  
  
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
      }



       document.getElementById("title").value = " ";
       document.getElementById("author").value = " ";
       document.getElementById("year").value = " ";

      
    });

   
      












