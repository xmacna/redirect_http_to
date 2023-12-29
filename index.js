const express = require("express");

const app = express();

require("dotenv").config();

let redirectUrl = process.env.REDIRECT_URL;
if (!redirectUrl) {
  console.error("REDIRECT_URL is not set in the environment variables.");
  process.exit(1);
}

try {
  new URL(redirectUrl); // This will throw if REDIRECT_URL is not a valid URL
} catch (error) {
  console.error("REDIRECT_URL is not a valid URL:", error.message);
  process.exit(1);
}

app.get("*", (req, res) => {
  const targetUrl = new URL(req.originalUrl, redirectUrl).href;
  console.log("Redirecting to:", targetUrl);
  res.redirect(301, targetUrl);
});

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, () => console.log(`Server running on port ${PORT}`))
  .on("error", (error) => console.error("Error starting server:", error));
