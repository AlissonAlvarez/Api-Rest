const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const Connection = require('./src/models/MythologicalConnection')
const Routes = require('./src/routes/MythologicalRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
Connection();

app.use(cors());
app.use('/', Routes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
