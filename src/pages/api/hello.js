const fs = require("fs");
import existingData from "../../data.json";

export default (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  req.body.date = new Date().toLocaleDateString();
  req.body.time = new Date().toLocaleTimeString();
  fs.writeFileSync(
    "./src/data.json",
    JSON.stringify([...existingData, req.body], null, 4)
  );
  res.status(200).json({
    msg: "Thank you for contacting us, we will be in touch shortly.",
  });
};
