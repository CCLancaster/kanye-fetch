


document.addEventListener('DOMContentLoaded', function() {

    console.log("👀");
    

    let getJoke = document.getElementById("getMeJoke");
    getJoke.addEventListener("click", function(e) {
    
        console.log("Initiating fetch");
        e.preventDefault();

        // //fetch joke
        // fetch('https://api.kanye.rest/')
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((myJson) => {
        //         console.log(myJson);
        //         document.getElementById("joke").textContent = "butts";
        //     });

        fetch('https://icanhazdadjoke.com/', {
            headers: {
                "Accept": "application/json", 
            },
        })
            .then((response) => {
                return response.json();
            })
           .then((myJson) => {
                console.log(myJson);
                document.getElementById("joke").textContent = `${myJson.joke}`;
            });
    });
});