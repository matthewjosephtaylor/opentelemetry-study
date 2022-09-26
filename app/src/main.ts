
import express from "express";
export const main = async () => {
  console.log("STARTING APPLICATION");
  const PORT = process.env.PORT || "8080";
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
  });
  console.log("STARTED APPLICATION");
};
