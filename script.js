// create a function for searching zelda games
function searchGame() {
  const gameInput = $("#gameinput").val();
  console.log(gameInput);

  //Here is where I set up the URL to query the LOZ API site
  const gameQueryURL = "https://zelda-api.apius.cc/api/games?name=" + gameInput;

  $.ajax({
    url: gameQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    const gameNameEl = $(".gameName").text("Name: " + response.data[0].name);

    const descriptionEl = $(".description").text(
      "Description: " + response.data[0].description
    );

    const developerEl = $(".developer").text(
      "Developer: " + response.data[0].developer
    );

    const publisherEl = $(".publisher").text(
      "Publisher: " + response.data[0].publisher
    );

    const released_dateEl = $(".released_date").text(
      "Released Date: " + response.data[0].released_date
    );
  });
}

// Create add event listener for game search button when clicked

$(".searchBtn1").on("click", function (event) {
  event.preventDefault();
  searchGame();
});
