const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signUp } = require('./controllers/userController'); // Ensure this path is correct
const validateInput = require('./middlewares/validateInput'); // Ensure this path is correct

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/users/signup', validateInput, signUp);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
