const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express();
const apiRoutes = require('./develop/routes/apiroutes')
const htmlRoutes = require('./develop/routes/htmlroutes')

app.use(express.static('develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
})
             