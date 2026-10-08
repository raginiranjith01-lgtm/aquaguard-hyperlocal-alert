function checkRisk() {

    // Simulated sensor values

    let rainfall = Math.floor(Math.random() * 70) + 10;

    let waterLevel = Math.floor(Math.random() * 70) + 10;


    // Display values

    document.getElementById("rainfall").innerText =
        rainfall + " mm";

    document.getElementById("waterLevel").innerText =
        waterLevel + " cm";


    // Risk calculation

    let risk;

    if (waterLevel >= 60 || rainfall >= 60) {

        risk = "HIGH";

    }

    else if (waterLevel >= 35 || rainfall >= 35) {

        risk = "MODERATE";

    }

    else {

        risk = "LOW";

    }


    // Display risk

    document.getElementById("risk").innerText =
        risk;


    // Alert message

    let alertBox =
        document.getElementById("alertBox");


    if (risk === "HIGH") {

        alertBox.innerHTML = `

            <h3>🚨 HIGH HAZARD ALERT</h3>

            <p>
                Severe water accumulation detected.
                Avoid the affected road immediately.
            </p>

        `;

    }

    else if (risk === "MODERATE") {

        alertBox.innerHTML = `

            <h3>⚠️ MODERATE WATERLOGGING</h3>

            <p>
                Water level is increasing.
                Consider using an alternative route.
            </p>

        `;

    }

    else {

        alertBox.innerHTML = `

            <h3>✅ LOW RISK</h3>

            <p>
                Current water level is within
                the safe range.
            </p>

        `;

    }

}
