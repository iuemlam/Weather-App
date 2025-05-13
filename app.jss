// List of 32 districts in Tamil Nadu with static weather data
const tamilNaduDistricts = {
    "Chennai": {
        temperature: 32,
        condition: "Partly cloudy",
        humidity: 70,
        wind: "18 km/h"
    },
    "Coimbatore": {
        temperature: 28,
        condition: "Clear sky",
        humidity: 65,
        wind: "12 km/h"
    },
    "Madurai": {
        temperature: 34,
        condition: "Sunny",
        humidity: 55,
        wind: "14 km/h"
    },
    "Tiruchirappalli": {
        temperature: 30,
        condition: "Hot",
        humidity: 60,
        wind: "10 km/h"
    },
    "Salem": {
        temperature: 29,
        condition: "Cloudy",
        humidity: 75,
        wind: "20 km/h"
    },
    "Erode": {
        temperature: 27,
        condition: "Partly cloudy",
        humidity: 80,
        wind: "15 km/h"
    },
    "Vellore": {
        temperature: 33,
        condition: "Sunny",
        humidity: 58,
        wind: "16 km/h"
    },
    "Tirunelveli": {
        temperature: 35,
        condition: "Hot",
        humidity: 50,
        wind: "10 km/h"
    },
    "Tiruppur": {
        temperature: 29,
        condition: "Clear sky",
        humidity: 65,
        wind: "15 km/h"
    },
    "Dindigul": {
        temperature: 31,
        condition: "Partly cloudy",
        humidity: 70,
        wind: "12 km/h"
    },
    "Thanjavur": {
        temperature: 31,
        condition: "Rainy",
        humidity: 85,
        wind: "8 km/h"
    },
    "Kanchipuram": {
        temperature: 30,
        condition: "Clear sky",
        humidity: 68,
        wind: "14 km/h"
    },
    "Nagercoil": {
        temperature: 30,
        condition: "Partly cloudy",
        humidity: 80,
        wind: "18 km/h"
    },
    "Cuddalore": {
        temperature: 28,
        condition: "Cloudy",
        humidity: 70,
        wind: "12 km/h"
    },
    "Pudukkottai": {
        temperature: 33,
        condition: "Hot",
        humidity: 60,
        wind: "10 km/h"
    },
    "Namakkal": {
        temperature: 32,
        condition: "Clear sky",
        humidity: 65,
        wind: "14 km/h"
    },
    "Karur": {
        temperature: 31,
        condition: "Partly cloudy",
        humidity: 75,
        wind: "16 km/h"
    },
    "Ramanathapuram": {
        temperature: 34,
        condition: "Sunny",
        humidity: 55,
        wind: "10 km/h"
    },
    "Sivaganga": {
        temperature: 29,
        condition: "Clear sky",
        humidity: 60,
        wind: "18 km/h"
    },
    "Virudhunagar": {
        temperature: 33,
        condition: "Sunny",
        humidity: 55,
        wind: "12 km/h"
    },
    "Thoothukudi": {
        temperature: 30,
        condition: "Cloudy",
        humidity: 72,
        wind: "14 km/h"
    },
    "Krishnagiri": {
        temperature: 28,
        condition: "Partly cloudy",
        humidity: 68,
        wind: "12 km/h"
    },
    "Dharmapuri": {
        temperature: 30,
        condition: "Clear sky",
        humidity: 60,
        wind: "15 km/h"
    },
    "Villupuram": {
        temperature: 32,
        condition: "Hot",
        humidity: 70,
        wind: "16 km/h"
    },
    "Kallakurichi": {
        temperature: 29,
        condition: "Rainy",
        humidity: 80,
        wind: "8 km/h"
    },
    "Perambalur": {
        temperature: 30,
        condition: "Clear sky",
        humidity: 65,
        wind: "12 km/h"
    },
    "Ariyalur": {
        temperature: 31,
        condition: "Partly cloudy",
        humidity: 75,
        wind: "14 km/h"
    },
    "Tenkasi": {
        temperature: 32,
        condition: "Cloudy",
        humidity: 70,
        wind: "16 km/h"
    },
    "Nagapattinam": {
        temperature: 28,
        condition: "Rainy",
        humidity: 85,
        wind: "10 km/h"
    },
    "Kancheepuram": {
        temperature: 30,
        condition: "Clear sky",
        humidity: 72,
        wind: "12 km/h"
    },
    "Theni": {
        temperature: 29,
        condition: "Partly cloudy",
        humidity: 75,
        wind: "14 km/h"
    },
    "The Nilgiris": {
        temperature: 18,
        condition: "Cool",
        humidity: 65,
        wind: "20 km/h"
    }
};

// Function to get weather for the district
function getWeather() {
    const district = document.getElementById('district').value.trim();

    // Check if the district exists in the data
    if (tamilNaduDistricts[district]) {
        const data = tamilNaduDistricts[district];

        // Display the data
        document.getElementById('district-name').textContent = district;
        document.getElementById('temperature').textContent = data.temperature;
        document.getElementById('condition').textContent = data.condition;
        document.getElementById('humidity').textContent = data.humidity;
        document.getElementById('wind').textContent = data.wind;

        // Show the result section
        document.getElementById('result').style.display = 'block';
    } else {
        alert("District not found! Please try another.");
    }
}
