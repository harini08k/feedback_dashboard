# Feedback Management System

A full-stack application for collecting, storing, and analyzing user feedback. The system provides:

* A frontend for submitting feedback (`index.html`)
* A dashboard for viewing and filtering feedback (`dashboard.html`)
* A Node.js + Express backend with MongoDB for persistence
* REST API routes for creating, retrieving, updating, and deleting feedback

![WhatsApp Image 2025-09-25 at 12 31 30_ff34587f](https://github.com/user-attachments/assets/6614626e-d38e-4237-bede-138c7daa90e0)


---

## Features

* **Submit Feedback**: Users can enter rating (1–5), comments, optional sentiment, and keywords.
* **Feedback Dashboard**: Displays all feedback in a table with filters (by rating, sentiment, or keyword).
* **RESTful API**: CRUD operations on feedback data.
* **MongoDB Integration**: Stores structured feedback documents.
* **Real-Time Filters**: Query-based filtering powered by the backend.

---

## Project Structure

```
.
├── models/
│   └── feedback.js      # Mongoose schema for feedback :contentReference[oaicite:1]{index=1}
├── routes/
│   └── feedbacks.js     # Feedback API routes (CRUD + filtering) :contentReference[oaicite:2]{index=2}
│   └── route.rest       # REST client file for testing API endpoints
├── frontend/
│    └── index.html       # Frontend form to submit feedback :contentReference[oaicite:3]{index=3}
│    └── dashboard.html       # Dashboard to view/filter feedback :contentReference[oaicite:4]{index=4}
│    └── script.js            # Handles form submission & dashboard logic :contentReference[oaicite:5]{index=5}
├── server.js            # Main Express server entrypoint :contentReference[oaicite:0]{index=0}

```

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harini08k/feedback_dashboard.git
   cd feedback_dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root with:

   ```env
   DATABASE_URL=mongodb://localhost:27017/feedbacks
   ```

4. **Start the server**

   ```bash
   node server.js
   ```

   Server will run on `http://localhost:3000`

5. **Access the app**

   * Submit feedback → open `index.html` in your browser.
   * View dashboard → open `dashboard.html`.

---

## API Endpoints

Base URL: `http://localhost:3000/feedbacks`

* **GET /** – Get all feedback (supports `?rating=`, `?sentiment=`, `?keyword=` filters)
* **GET /:id** – Get single feedback by ID
* **POST /** – Create new feedback
* **PATCH /:id** – Update feedback fields
* **DELETE /:id** – Delete feedback

Example request:

```http
POST /feedbacks
Content-Type: application/json

{
  "rating": 5,
  "comment": "Amazing service!",
  "sentiment": "positive",
  "keywords": ["service", "fast"]
}
```
![WhatsApp Image 2025-09-25 at 12 33 55_b35a3552](https://github.com/user-attachments/assets/38d331ae-3c8b-4aab-b177-10fd0979ae50)


---

## Tech Stack

* **Backend**: Node.js, Express, MongoDB (Mongoose)
* **Frontend**: HTML, JavaScript (Vanilla)
* **Tools**: REST Client (`route.rest`), dotenv, cors

---

## Dashboard Preview

The dashboard (`dashboard.html`) allows filtering:

* By **Rating** (1–5)
* By **Sentiment** (positive/neutral/negative)
* By **Keywords** (search terms in comments)

![WhatsApp Image 2025-09-25 at 12 35 34_bb6179b0](https://github.com/user-attachments/assets/5631dc5b-3105-4bfd-8115-67e930b32172)

Data is automatically fetched and displayed in a table.
![WhatsApp Image 2025-09-25 at 12 35 02_4a60f9c6](https://github.com/user-attachments/assets/ed12db54-02e2-448d-b39a-0f19b1c5a8ad)

---

## Future Improvements

* Authentication & role-based access
* Sentiment analysis automation (NLP)
* Export feedback to CSV/Excel
* Improved UI with React or Vue

---

## Author

**Harini Karthikeyan**
[GitHub Profile](https://github.com/harini08k)

---
