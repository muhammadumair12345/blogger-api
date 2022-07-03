// It is used for designing and building web applications quickly and easily.
import express from 'express';

// Body-parser is the Node. js body parsing middleware.
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
import bodyParser from 'body-parser';

// Mongoose provides a straight-forward, schema-based solution to model your application data.
import mongoose from 'mongoose';

// Cross - Origin Resource Sharing(CORS) is an HTTP - header based mechanism that allows a server to indicate any
// origins(domain, scheme, or port) other than its own from which a browser should permit loading resources.
import cors from 'cors';

// dotenv Loads environment variables from.env file.
import dotenv from 'dotenv';

//routes importing
import blogRouter from './routes/blog.js';

dotenv.config();

const app = express();

// use() function is used to mount the specified middleware function(s) at the path which is being specified.

// bodyParser.json() Returns middleware that only parses json
// and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json({ limit: '30mb', extended: true }));

// Returns middleware that only parses urlencoded bodies and
// only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors({ origin: true, credentials: true }));

//Defining Port on which our page is load.
const PORT = process.env.PORT || 'stackblitz.io';

//Connection Parameters Passing in mongoose.connect() method.
const CONNECTION_PARAMS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use() function is used to mount the specified middleware function(s) at the path which is being specified.
app.use('/blogs', blogRouter);

// The app.get() responds with “Hello to ToDo App API” for requests to the root URL (/) or route.
app.get('/', (req, res) => {
  res.send('<h1>Hello to Blog App API</h1>');
});

// Connecting with MongoDB with the mongoose.connect() method.
mongoose
  .connect(process.env.CONNECTION_URL, CONNECTION_PARAMS)
  .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
