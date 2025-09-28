import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

app.get('/status', (request, response) => {
  const status = {
    'Status': 'Running'
  };

  response.send(status);
});
