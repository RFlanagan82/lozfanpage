function searchGame() {
    const gameInput = $("#gameinput").val();
    console.log(gameInput);

    //Here is where I set up the URL to query the LOZ API site
    const gameQueryURL = "https://zelda-api.apius.cc/api/games?name=" + gameInput;

    $.ajax({
        url: gameQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        const gameNameEl = $(".gameName").text("Name: " + response.data.name);

        const descriptionEl = $(".description").text("Description: " + response.data.description);

        const developerEl = $(".developer").text("Developer: " + response.data.developer);

        const publisherEl = $(".publisher").text("Publisher: " + response.data.publisher);

        const released_dateEl = $(".released_date").text("Released Date: " + response.data.released_date);

        // gameName.append(gameNameEl)
        // description.append(descriptionEl);
        // developer.append(developerEl);
        // publisher.append(publisherEl);
        // released_date.append(released_dateEl);

    // }).catch(error => {
    //     console.log(error);
    })
};

// Create add event listener for game search button when clicked

$(".searchBtn1").on("click", function (event) {
    event.preventDefault();
    searchGame();
});

