# 🌦 Weather-Based Order Processing System

This project is a Node.js application that processes customer orders and determines whether deliveries should be delayed based on real-time weather conditions using the OpenWeatherMap API.

---

## 📌 Project Objective

The goal of this project is to:

* Fetch real-time weather data for multiple cities
* Process all orders in parallel (concurrent execution)
* Identify delivery delays based on weather conditions
* Handle errors gracefully without crashing
* Maintain secure coding practices using environment variables

---

## ⚙️ Features

### ✅ 1. Parallel API Fetching

* Uses `Promise.all()` to fetch weather data concurrently
* Improves performance compared to sequential execution

### ✅ 2. Weather-Based Decision Logic ("Golden Flow")

* If weather condition is:

  * Rain
  * Snow
  * Extreme
* Then order status is updated to **Delayed**
* Otherwise, it remains **Pending**

---

### ✅ 3. AI-Based Apology Message

* Generates a personalized message for delayed orders

Example:
Hi Alice, your order to New York is delayed due to Rain. We appreciate your patience!

---

### ✅ 4. Error Handling (Resilience)

* Handles invalid city inputs (e.g., `InvalidCity123`)
* Logs errors clearly in terminal
* Continues processing other valid orders

---

### ✅ 5. Secure API Key Management

* Uses `.env` file to store API key
* Prevents exposing sensitive data in code

---

## 📁 Project Structure

weather-order-app/
│
├── orders.json        # Input data (orders)
├── script.js          # Main application logic
├── .env               # API key (not shared publicly)
├── ai_log.txt         # AI usage documentation
├── package.json       # Project dependencies
└── README.md          # Project documentation

---

## 📦 Installation

1. Install Node.js (LTS version)

2. Navigate to the project folder:
   cd weather-order-app

3. Install dependencies:
   npm install

---

## 🔑 Setup API Key

1. Sign up at: https://openweathermap.org
2. Generate an API key
3. Create a `.env` file in the project root

Add the following:

API_KEY=your_api_key_here

---

## ▶️ How to Run

Run the script using:

node script.js

---

## 📥 Input (orders.json)

Example input:

[
{
"order_id": "1001",
"customer": "Alice Smith",
"city": "New York",
"status": "Pending"
}
]

---

## 📤 Output

* Updates `orders.json` file
* Marks orders as **Delayed** if bad weather is detected
* Displays detailed logs in the terminal showing:

  * Input orders
  * Processing steps
  * Weather conditions
  * Final output

---

## 🧠 How It Works

1. Reads order data from `orders.json`
2. Sends API requests in parallel using `Promise.all()`
3. Retrieves weather data for each city
4. Applies delay logic based on weather conditions
5. Generates apology messages if needed
6. Writes updated results back to `orders.json`

---

## 🎥 Demo

The demo should include:

* Running the script using terminal
* Displaying step-by-step logs
* Showing updated `orders.json` file

---

## 🤖 AI Usage (Summary)

AI tools were used for:

* Implementing parallel API calls using Promise.all
* Writing error handling logic using try-catch
* Generating dynamic apology messages
* Understanding file handling using Node.js  

---

## 🏁 Conclusion

This project demonstrates:

* Asynchronous programming in Node.js
* API integration
* Parallel execution
* Error handling and resilience
* Secure coding practices

---

## ✅ Assignment Requirements Covered

* Parallel fetching using Promise.all ✔
* Weather-based delay logic ✔
* AI-generated apology message ✔
* Error handling for invalid city ✔
* Secure API key using .env ✔
* Updated JSON output ✔
* AI log documentation ✔
* Demo recording ✔

---

## 🚀 Final Note

This project is fully functional and follows all assignment requirements while maintaining clean, readable, and efficient code.
