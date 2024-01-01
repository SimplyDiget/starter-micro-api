const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;

  try {
    const proxyResponse = await fetch(targetUrl);
    const text = await proxyResponse.text();
    res.send(text);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error occurred while making the request.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
