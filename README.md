# Cars Dealership Application

**Repository Name:** agfyc-cloud-native-fullstack-capstone  
**Project Name:** Cars Dealership Full-Stack Cloud-Native Application  
**Author:** Viwaan Kanitkar (GitHub: [NotViwaan](https://github.com/NotViwaan))

---

## Project Overview
The **Cars Dealership Application** is a full-stack, cloud-native web platform designed for a national car retailer in the United States. The system allows prospective buyers and existing vehicle owners to locate dealerships across states, view detailed dealer inventory and ratings, and submit verified customer reviews with real-time sentiment analysis.

## Architecture & Microservices
- **Frontend Layer:** React.js single-page application and static template views with Bootstrap 5.
- **Backend Application Layer:** Python / Django web framework managing user authentication, sessions, and car catalog models (`CarMake`, `CarModel`).
- **Dealer Microservice:** Node.js / Express microservice integrated with MongoDB for high-throughput dealership catalog and review queries.
- **Sentiment Analysis Microservice:** Python / Flask microservice implementing natural language processing (NLP) to classify review sentiments into positive, neutral, or negative categories.
- **CI/CD & Cloud Deployment:** Automated linting and testing via GitHub Actions, containerized using Docker, and deployed on IBM Cloud Code Engine.

## Microservices Endpoints
- `GET /djangoapp/get_dealers` – Retrieve all dealerships across states.
- `GET /djangoapp/get_dealers/:state` – Filter dealerships by state.
- `GET /djangoapp/get_dealer/:id` – Retrieve individual dealership profile.
- `GET /djangoapp/get_reviews/:id` – Fetch all reviews for a specific dealership.
- `POST /djangoapp/add_review` – Post customer feedback and car purchase verification.
- `GET /djangoapp/get_cars` – Retrieve all car makes and models.
- `GET /analyze/:text` – Real-time sentiment analysis engine.
