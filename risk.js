//Skapa array med länder
var countries = ["Egypten", "Ural", "Västeuropa", "Nordvästterritoriet", "Irkutsk", "Alaska", "Alberta", "Ontario", "Quebec", "Grönland", "Västra USA", "Östra USA", "Centralamerika", "Venezuela", "Peru", "Brasilien", "Argentina", "Island", "Storbritannien", "Nordeuropa", "Sydeuropa", "Skandinavien", "Ukraina", "Nordafrika", "Japan", "Östafrika", "Kongo", "Sydafrika", "Madagaskar", "Sibirien", "Jakutien", "Kamtjatka", "Mongoliet", "Afghanistan", "Kina", "Mellanöstern", "Indien", "Siam", "Indonesien", "Nya Guinea", "Västra Australien", "Östra Australien"];

//Array med 0or och 1or där 0 betyder vald och 1 betyder inte vald
var selectedCountries = new Array();
var antalLander = countries.length / 2;
var spelare1lander = new Array();
var spelare2lander = new Array();
var rnd;

//Initialisera selectedCountries med bara ettor
for (var i = 0; i < countries.length; i++) {
    selectedCountries[i] = 1;
}

//Program

//Spelare 1 test new commit 

for (var i = 0; i < antalLander; i++) {
    //Slumptal mellan 0 och contries.length

    rnd = Math.floor(Math.random() * countries.length - 1);

    //Om land redan är valt eller är odefinierat, välj nytt land på givna placeringen
    if (selectedCountries[rnd] == 0 || countries[rnd] == undefined) {
        i--;

    } else {
        selectedCountries[rnd] = 0;
        spelare1lander[i] = countries[rnd];
        //console.log(rnd);
    }
}

//Spelare 2

for (var i = 0; i < selectedCountries.length; i++) {
    if (selectedCountries[i] == 1) {
        spelare2lander.push(countries[i])
    }
}


//Utskrifter
process.stdout.write('\033c');
console.log("Risksimulatorn");
console.log("--------------");
console.log("Detta program slumpar ut länder till två spelare i Risk.♥");
console.log();
console.log("Spelare 1s länder:")
for (var i = 0; i < spelare1lander.length; i++) {

    console.log(spelare1lander[i]);
}
console.log();
console.log("Spelare 2s länder:");
for (var i = 0; i < spelare2lander.length; i++) {

    console.log(spelare2lander[i])

}