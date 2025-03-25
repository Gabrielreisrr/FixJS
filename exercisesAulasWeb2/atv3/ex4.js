const fs = require("fs").promises;
const path = require("path");

async function readFileAsync() {
  const startTime = Date.now();
  try {
    const data = await fs.readFile(
      path.join(__dirname, "example.html"),
      "utf8"
    );
    const lines = data.split("\n");
    console.log(lines);
  } catch (err) {
    console.error("Error reading file:", err);
  }
  const endTime = Date.now();
  console.log(`Time taken: ${endTime - startTime}ms`);
}

readFileAsync();
