const express = require("express");
const app = express();

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  return res.json({
    message: `${PORT === 8000 ? "Prod" : "Dev"} server running on PORT:${PORT}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
