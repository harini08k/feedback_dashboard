// URL of your backend
const BASE_URL = "http://localhost:3000/feedbacks";

// Handle form submission
const form = document.getElementById("feedbackForm");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            rating: Number(formData.get("rating")),
            comment: formData.get("comment"),
            sentiment: formData.get("sentiment") || undefined,
            keywords: formData.get("keywords") 
                        ? formData.get("keywords").split(",").map(k => k.trim()) 
                        : undefined
        };

        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            document.getElementById("result").innerText = "Feedback submitted!";
            form.reset();
        } catch (err) {
            document.getElementById("result").innerText = "Error submitting feedback";
            console.error(err);
        }
    });
}

// Handle dashboard display and filtering
const tableBody = document.querySelector("#feedbackTable tbody");
const filterBtn = document.getElementById("filterBtn");

async function loadFeedbacks(query = "") {
    tableBody.innerHTML = "";
    const res = await fetch(BASE_URL + query);
    const feedbacks = await res.json();
    feedbacks.forEach(f => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = f._id;
        row.insertCell(1).innerText = f.rating;
        row.insertCell(2).innerText = f.comment;
        row.insertCell(3).innerText = f.sentiment || "";
        row.insertCell(4).innerText = f.keywords ? f.keywords.join(", ") : "";
        row.insertCell(5).innerText = new Date(f.timestamp).toLocaleString();
    });
}

if (filterBtn) {
    filterBtn.addEventListener("click", () => {
        const rating = document.getElementById("filterRating").value;
        const sentiment = document.getElementById("filterSentiment").value;
        const keyword = document.getElementById("filterKeyword").value;
        let query = "?";
        if (rating) query += `rating=${rating}&`;
        if (sentiment) query += `sentiment=${sentiment}&`;
        if (keyword) query += `keyword=${keyword}&`;
        loadFeedbacks(query.slice(0, -1)); // remove last &
    });
}

// Automatically load all feedbacks on dashboard page
if (tableBody) loadFeedbacks();
