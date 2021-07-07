const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./develop/routes/apiroutes')
const htmlRoutes = require('./develop/routes/htmlroutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
})
