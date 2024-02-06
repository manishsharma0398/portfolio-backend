const express = require("express");
const app = express();

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.ENVIRONMENT;

app.get("/", (req, res) => {
  return res.json({
    message: `${ENVIRONMENT} server running on PORT:${PORT}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT} && ENV:${ENVIRONMENT}`);
});
