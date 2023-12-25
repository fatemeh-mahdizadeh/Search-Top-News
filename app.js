//class
const ui = new UI();
const newAPI = new News();

listener();
function listener() {
  document.querySelector("form").addEventListener("submit", search);
}

//function
function search(e) {
  e.preventDefault();
  const newsName = document.querySelector("#news-name").value;
  const country = document.querySelector("#country").value;
  const category = document.querySelector("#category").value;

  if (newsName !== "" || country !== "" || category !== "") {
    newAPI.queryAPI(newsName, country, category).then((news) => {
      const newsArray = news.news.articles;
      if (newsArray.length > 0) {
        ui.showNews(newsArray);
      } else {
        ui.printMesege(
          "There is no news with your filtreing",
          "bg-red-600 w-10/12 mx-auto rounded-xl py-2  pl-4"
        );
      }
    });
  } else {
    ui.printMesege(
      "Please enter atleast one parameter",
      "bg-red-600 w-10/12 mx-auto rounded-xl py-2  pl-4"
    );
  }
}
