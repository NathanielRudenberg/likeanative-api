import express from "express";
import getFormants from "./services/getFormants.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log("> Server listening on port", PORT, '\n');
});

app.get('/status', (request, response) => {
  const status = {
    'Status': 'Running'
  };

  response.send(status);
});

app.get('/vowel-formants/:language', async (request, response) => {
  const language = request.params.language;

  const formants = await getFormants(language);


  response.json(formants);
})
