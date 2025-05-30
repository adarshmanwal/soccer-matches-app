const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
const demoMatches = [
    {
        homeTeam: "FC Barcelona",
        awayTeam: "Real Madrid",
        date: "2025-06-05T18:30:00Z",
    },
    {
        homeTeam: "Manchester United",
        awayTeam: "Chelsea FC",
        date: "2025-06-06T20:00:00Z",
    },
    {
        homeTeam: "Bayern Munich",
        awayTeam: "Borussia Dortmund",
        date: "2025-06-07T15:45:00Z",
    },
];
app.get("/api/matches", (req, res) => {
    res.json(demoMatches);
});
app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);