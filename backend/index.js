const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());

app.use(cors())

app.use("/user", userRouter)

app.use(express.json());
// app.use(cors());

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
