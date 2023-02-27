const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser =require('body-parser');

const Connection = require('./models/MythologicalConnection')
const Routes = require('./routes/MythologicalRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
Connection();

app.use(bodyParser.json({exteng: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Routes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


