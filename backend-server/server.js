require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware
const { Client } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

const app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(cors({
  origin: "http://localhost:5173", // Allow only your frontend origin
  methods: "GET,POST,OPTIONS", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
}));

const PORT = 5001;

// Environment variables
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const tenantId = process.env.TENANT_ID;
const excelFileId = process.env.EXCEL_FILE_ID;

// Handle preflight requests (CORS preflight)
app.options("*", cors());

// Get access token from Azure AD
async function getAccessToken() {
  const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
      scope: "https://graph.microsoft.com/.default",
    }),
  });

  const data = await response.json();
  return data.access_token;
}

// Write data to Excel
async function writeToExcel(email, contact) {
  const accessToken = await getAccessToken();
  const client = Client.init({
    authProvider: (done) => done(null, accessToken),
  });

  // Append a row to the Excel table
  await client.api(`/me/drive/items/${excelFileId}/workbook/tables/Table1/rows`).post({
    values: [[email, contact]],
  });
}

// Define API endpoint
app.post("/saveDataToExcel", async (req, res) => {
  const { email, contact } = req.body;

  if (!email || !contact) {
    return res.status(400).send({ message: "Email and contact are required." });
  }

  try {
    await writeToExcel(email, contact);
    res.status(200).send({ message: "Data saved to Excel successfully." });
  } catch (error) {
    console.error("Error saving data to Excel:", error);
    res.status(500).send({ message: "Error saving data to Excel." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
