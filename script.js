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

//Function to query for character
function searchCharacter() {
  const characterInput = $("#characterinput").val();
  console.log(characterInput);

  const characterQueryURL =
      "https://zelda-api.apius.cc/api/characters?name=" + characterInput;
    console.log(characterQueryURL);

  $.ajax({
    url: characterQueryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response);
      $("#characterInfoView").empty();
      for (var i = 0; i < response.length; i++) {
          console.log(data[i]);
          
        //   const dataItem = data[i];
          const column = $("<div>").addClass("col-sm-8");
          const card = $("<div>").addClass("card");
          const characterNameEl = $("<h3>")
            .addClass(".characterName")
            .text("Name: " + response.data[i].name);

          const charDescriptionEl = $("<p>")
            .addClass(".char_description")
            .text("Description: " + response.data[i].description);

          const genderEl = $("<p>")
            .addClass(".gender")
            .text("Gender: " + response.data[i].gender);

          const raceEl = $("<p>")
            .addClass(".race")
            .text("Race: " + response.data[i].race);

          const appearancesEl = $("<p>")
            .addClass(".appearances")
              .text("Appearances: " + response.data[i].appearances);
          
          card.append(characterNameEl);
          card.append(genderEl);
          card.append(raceEl);
          card.append(appearancesEl);
          card.append(charDescriptionEl);
          column.append(card);

          $("#characterInfoView").append(column);
          
      }
  });
}

// Create add event listener for character search button when clicked

$(".searchBtn2").on("click", function (event) {
  event.preventDefault();
  searchCharacter();
});
