require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const API_KEY = process.env.API_KEY;

// 📥 READ INPUT FILE
const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));

// 🌦 FETCH WEATHER FUNCTION
async function fetchWeather(city) {
  try {
    console.log(`🌍 Fetching weather for: ${city}...`);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(url);

    const weather = response.data.weather[0].main;

    console.log(`✅ Weather in ${city}: ${weather}`);

    // Small delay for better readability (optional)
    await new Promise((resolve) => setTimeout(resolve, 300));

    return weather;
  } catch (error) {
    console.log(`❌ Error fetching weather for: ${city}`);
    return null;
  }
}

// 🤖 AI APOLOGY FUNCTION
// function generateApology(customer, city, weather) {
//   return `Hi ${customer}, your order to ${city} is delayed due to ${weather}. We appreciate your patience!`;
// }  

function generateApology(customer, city, weather) {
  let reason = "";

  if (weather === "Rain") reason = "heavy rain";
  else if (weather === "Snow") reason = "snowfall";
  else if (weather === "Extreme") reason = "extreme weather conditions";
  else if (weather === "Clouds") reason = "unfavorable weather conditions";
  else reason = weather;

  return `Hi ${customer}, your order to ${city} is delayed due to ${reason}. We truly appreciate your patience and understanding.`;
}

// 🚀 MAIN PROCESS FUNCTION
async function processOrders() {
  console.log("\n==================== 📥 INPUT ORDERS ====================\n");
  console.log(JSON.stringify(orders, null, 2));

  console.log("\n==================== 🚀 PROCESSING ORDERS ====================\n");

  // ⚡ PARALLEL PROCESSING
  const promises = orders.map(async (order) => {
    console.log("\n--------------------------------------------------");
    console.log(`📦 Order ID   : ${order.order_id}`);
    console.log(`👤 Customer   : ${order.customer}`);
    console.log(`📍 City       : ${order.city}`);
    console.log("--------------------------------------------------");

    const weather = await fetchWeather(order.city);

    if (!weather) {
      console.log("⚠️ Skipping this order due to error\n");
      return order;
    }

    console.log(`🌦 Weather Condition: ${weather}`);

    // 🎯 GOLDEN FLOW LOGIC
    if (["Rain", "Snow", "Extreme", "Clouds"].includes(weather)) {
      order.status = "Delayed";

      console.log("🚨 STATUS: DELAYED");

      const message = generateApology(
        order.customer,
        order.city,
        weather
      );

      console.log(`📢 Message: ${message}`);
    } else {
      console.log("✅ STATUS: ON TIME");
    }

    return order;
  });

  // ⚡ WAIT FOR ALL PROMISES (PARALLEL)
  const updatedOrders = await Promise.all(promises);

  console.log("\n==================== 📤 FINAL OUTPUT ====================\n");
  console.log(JSON.stringify(updatedOrders, null, 2));

  // 💾 SAVE UPDATED DATA
  fs.writeFileSync(
    "orders.json",
    JSON.stringify(updatedOrders, null, 2)
  );

  console.log("\n✅ orders.json updated successfully!");
}

// ▶️ RUN SCRIPT
processOrders();  