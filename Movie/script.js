class MovieList {
  constructor() {
    this.movieArray = [];
    this.STORE_LOCAL = "STORE_LOCAL";
  }

  appendMovie(movieName, movieRate) {
    if (movieName === "" || movieRate === "") {
      alert("Masukkan nama dan rating film");
      return;
    } else {
      if (isNaN(movieRate)) {
        alert("Rating harus angka");
      } else {
        let movieList =
          `<tr class="table__row">` +
          `<td class="movie__name">${movieName}</td>` +
          `<td class="movie__rate">${parseFloat(movieRate).toFixed(1)}</td>` +
          `<td><button class="button__remove">x</button></td>`;
        $("#movie-table").append(movieList);
        this.storeToLocal("ADD", movieName, movieRate);
      }
    }
  }

  getFromLocal() {
    let local = localStorage.getItem("STORE_LOCAL");
    let data = JSON.parse(local) || [];

    data.forEach((element) => {
      let movieList =
        `<tr class="table__row">` +
        `<td class="movie__name">${element.movieName}</td>` +
        `<td class="movie__rate">${parseFloat(element.movieRate).toFixed(
          1
        )}</td>` +
        `<td><button class="button__remove">x</button></td>`;
      $("#movie-table").append(movieList);
    });
  }

  storeToLocal(status, movieName, movieRate) {
    var movieObject = {};
    switch (status) {
      case "ADD":
        movieObject.movieName = movieName;
        movieObject.movieRate = movieRate;
        this.movieArray.push(movieObject);
        console.log(this.movieArray);
        break;
      case "DELETE":
        let index = this.movieArray.findIndex((m) => m.movieName === movieName);
        this.movieArray.splice(index, 1);
        console.log(index);
        break;
      default:
        break;
    }
    localStorage.setItem("STORE_LOCAL", JSON.stringify(this.movieArray));
  }
}

const movieList = new MovieList();

movieList.getFromLocal();

$(".button__add").on("click", function () {
  movieList.appendMovie(
    $("#input-movieName").val(),
    $("#input-movieRate").val()
  );
  $("#input-movieName").val("");
  $("#input-movieRate").val("");
});

$("#movie-table").on("click", ".button__remove", function () {
  movieList.storeToLocal(
    "DELETE",
    $(this).parent().siblings(".movie__name").text(),
    $(this).parent().siblings(".movie__rate").text()
  );
  $(this).closest("tr").remove();
});

$(".header__movie-name").on("click", function () {
  var table = $(this).parents("table");
  console.log(table);
  var rows = table
    .find("tr:gt(0)")
    .toArray()
    .sort(compare($(this).index()));
  table.append(rows);

  function compare(index) {
    return function (rowA, rowB) {
      var valA = getCell(rowA, index);
      var valB = getCell(rowB, index);
      return valA.localeCompare(valB);
    };
  }

  function getCell(row, index) {
    return $(row).children("td").eq(index).text();
  }
});

$("#input-movieSearch").on("keyup", function () {
  let val = $(this).val().toLowerCase();
  $("#movie-table tr").each(function (index) {
    if (!index) return;
    $(this)
      .find("td")
      .each(function () {
        let idx = $(this).text().toLocaleLowerCase();
        let notFound = idx.indexOf(val) == -1;
        $(this).closest("tr").toggle(!notFound);
        return notFound;
      });
  });
});
