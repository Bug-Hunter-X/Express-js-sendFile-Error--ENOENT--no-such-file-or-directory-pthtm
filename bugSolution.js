const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  //Check if the file exist before trying to send it
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err){
      res.status(404).send('<h1>404 File Not Found</h1>')
    }else{
        res.sendFile(filePath);
    }
  })
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});