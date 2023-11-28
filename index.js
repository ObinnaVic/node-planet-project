const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const getHabitablePlanets = (planets) => {
    return planets["koi_disposition"] === "CONFIRMED";
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
        console.log("Done");
    })