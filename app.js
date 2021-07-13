const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./Database/db');
const member_route = require('./Routes/Member_route')
const company_route = require('./Routes/Company_route')
const reseller_route = require('./Routes/Reseller_route')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(member_route);
app.use(company_route);
app.use(reseller_route);

app.listen(90);

//Cylinder2.0