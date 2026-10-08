function checkRisk() {

    // Simulated Sensor Values
    let rainfall = Math.floor(Math.random() * 70) + 10;
    let waterLevel = Math.floor(Math.random() * 70) + 10;

    // Display Values
    document.getElementById("rainfall").innerText = rainfall + " mm";
    document.getElementById("waterLevel").innerText = waterLevel + " cm";

    let risk = "";

    // Risk Calculation
    if (waterLevel >= 60 || rainfall >= 60) {
        risk = "HIGH";
    }
    else if (waterLevel >= 35 || rainfall >= 35) {
        risk = "MODERATE";
    }
    else {
        risk = "LOW";
    }

    // Display Risk
    document.getElementById("risk").innerText = risk;

    let alertBox = document.getElementById("alertBox");

    if (risk === "HIGH") {

        alertBox.innerHTML = `
        <div class="alert high">
            <h3>🚨 HIGH HAZARD ALERT</h3>
            <p>
            Severe waterlogging detected.<br>
            Avoid the affected road immediately.<br>
            Emergency services have been notified.
            </p>
        </div>
        `;

    }
    else if (risk === "MODERATE") {

        alertBox.innerHTML = `
        <div class="alert moderate">
            <h3>⚠️ MODERATE WATERLOGGING</h3>
            <p>
            Water level is increasing.<br>
            Consider using an alternative route.
            </p>
        </div>
        `;

    }
    else {

        alertBox.innerHTML = `
        <div class="alert low">
            <h3>✅ LOW RISK</h3>
            <p>
            Current water level is within the safe range.
            </p>
        </div>
        `;

    }
}
