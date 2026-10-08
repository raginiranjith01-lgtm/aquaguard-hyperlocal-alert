const express = require("express");

const app = express();

app.use(express.json());


// Sample waterlogging data

let waterData = {

    location: "Zone A",

    rainfall: 42,

    waterLevel: 38,

    risk: "MODERATE"

};


// GET SENSOR DATA

app.get("/api/status", (req, res) => {

    res.json(waterData);

});


// UPDATE SENSOR DATA

app.post("/api/update", (req, res) => {

    const {
        rainfall,
        waterLevel
    } = req.body;


    waterData.rainfall = rainfall;

    waterData.waterLevel = waterLevel;


    // Risk calculation

    if (waterLevel >= 60 || rainfall >= 60) {

        waterData.risk = "HIGH";

    }

    else if (waterLevel >= 35 || rainfall >= 35) {

        waterData.risk = "MODERATE";

    }

    else {

        waterData.risk = "LOW";

    }


    res.json({

        message: "Data updated successfully",

        data: waterData

    });

});


app.listen(3000, () => {

    console.log(
        "AquaGuard backend running on port 3000"
    );

});
