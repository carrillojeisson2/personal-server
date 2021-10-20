const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;
// const portDb = 27017;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config');

// mongoose.set('UseFindAndModify', false);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/jeick`,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log('db conect ok....');

            app.listen(port, () => {
                console.log("api rest ok");
                console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
            });

        }
    }
);