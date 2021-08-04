const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./Database/db');
const member_route = require('./Routes/Member_route')
const company_route = require('./Routes/Company_route')
const reseller_route = require('./Routes/Reseller_route')
const stock_route = require('./Routes/Stock_route')
const resellerstock_route = require('./Routes/ResellerStock_route')
const companyStock_route = require('./Routes/CompanyStock_route')
const schedule_reseller_stock_route = require('./Routes/Schedule_Reseller_Stock_Route')
const schedule_Extra = require("./Routes/Schedule_Extra")

const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(member_route);
app.use(company_route);
app.use(reseller_route);
app.use(stock_route);
app.use(resellerstock_route);
app.use(companyStock_route);
app.use(schedule_reseller_stock_route);
app.use(schedule_Extra);

app.listen(90);

//Cylinder2.0