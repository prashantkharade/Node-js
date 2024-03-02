const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/append', (req, res) => {
  const file1 = req.body.file1;
  const file2 = req.body.file2;

  // Read contents of file1
  fs.readFile(file2, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file1.');
    } else {
      // Append contents of file1 to file2
      fs.appendFile(file1, data, (err) => {
        if (err) {
          res.status(500).send('Error appending to file2.');
        } else {
          res.send('Contents appended successfully.');
        }
   
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
