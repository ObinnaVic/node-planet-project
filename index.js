const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const getHabitablePlanets = (planets) => {
    return (
      planets["koi_disposition"] === "CONFIRMED" &&
      planets["koi_insol"] > 0.36 &&
      planets["koi_insol"] < 1.11 &&
      planets["koi_prad"] < 1.6
    );
}

fs.createReadStream("keplar-data.csv")
    .pipe(parse({
        comment: "#",
        columns: true
    }))
    .on("data", (data) => {
        if (getHabitablePlanets(data)) {
            habitablePlanets.push(data);
        }
    })
    .on("error", (err) => {
        console.log(err);
    })
    .on("end", () => {
        console.log(`${habitablePlanets.length} planets is the amount of habitable planets found from our data`);
    })