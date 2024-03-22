const express = require('express');
const routes = require('../src/routes/user.route');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/",routes)
  

// app.get('/', (req , res) => {
//     res.send('Welcome');
// });

app.listen(port, ()=> console.log(`server listening on http://localhost:${port}`));
