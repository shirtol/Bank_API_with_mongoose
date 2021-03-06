import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? "https://shirtol-bank-api-mongoose.herokuapp.com/"
        : "http://localhost:5000";

export default axios.create({
    baseURL: URL,
});
