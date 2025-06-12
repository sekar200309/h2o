# WATER MANAGEMENT NETWORK

An IoT-based pipeline water management system for real-time monitoring, analytics, and alerting. This project integrates hardware sensors (with embedded C on ESP32), GSM-based SMS alerts, and a React+Firebase web dashboard for efficient water resource oversight.

## 🌐 Project Links

- **Live Demo:** [https://wmnetwork.vercel.app/](https://wmnetwork.vercel.app/)
- **Repository:** [GitHub Repository](https://github.com/sekar200309/h2o.git)

---

## 💡 Project Overview

- **Monitors water levels, pH, and pipeline conditions** using ESP32 microcontrollers, flow and pH sensors.
- **Web dashboard** built with ReactJS and Firebase for real-time data visualization, recording, and analytics.
- **GSM module** for SMS alerts on leaks and pipeline breakages.
- **Reliable data flow:** Embedded C firmware ensures robust sensor connectivity and data transmission.

---

## 🖥️ Key Features

- **Embedded C on ESP32:** Handles sensor interfacing, real-time measurement, and GSM-based SMS alerts.
- **IoT Sensors:** Flow sensors and pH sensors deployed in pipeline network.
- **Realtime Database:** Uses Firebase for storing and syncing live sensor data.
- **ReactJS Dashboard:** Modern UI for live monitoring, analytics, mapping, and reporting.
- **Advanced Analytics:** Graphs, charts, and tables for water usage and quality.
- **Alerting:** Automated SMS notifications for abnormal events.
- **Data Download:** Export logs and reports for offline analysis.
- **Maintenance & Reporting:** Predictive maintenance tools and reporting modules.
- **Interactive Mapping:** Visualize pipeline networks and sensor locations on real maps.

---

## 📸 Screenshots

### Water Flow Rate Visualization

![image1](image1)

### Flow Sensor Data Table

![image2](image2)

### Maintenance & Reporting Module

![image3](image3)

### Analytics & Interactive Map

![image4](image4)

---

## ⚙️ Technologies Used

- **Hardware:** ESP32 microcontroller, GSM module, flow sensors, pH sensors
- **Firmware:** Embedded C (for ESP32 sensor data acquisition and GSM SMS)
- **Realtime Database:** Firebase
- **Frontend:** ReactJS, HTML5, CSS3, JavaScript
- **Visualization:** CanvasJS, Google Charts, Leaflet.js (for mapping)
- **Alerts:** SMS via GSM module

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sekar200309/h2o.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd h2o
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the React app:**
   ```bash
   npm start
   ```
5. **Open the dashboard:**
   - Visit `http://localhost:3000` in your browser.

---

## 📊 System Architecture

IoT sensors (flow, pH) → ESP32 (Embedded C) → GSM module (SMS alerts) + Firebase (Realtime data) → ReactJS dashboard → Analytics, alerts, and reporting

---

## 🙏 Credits

- Developed by **Tech Titans**
- Inspired by the need for smart, data-driven water management solutions.

---

## 📄 License

This project is for educational and research purposes only.

---

Feel free to open issues or contribute to improve the system!
