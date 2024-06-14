const express = require("express");
const { notFoundHandler } = require("./middlewares/notFoundHandler");
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.raw());

// Identity Routes
app.use("/auth", require("./routers/identity/authRouters"));

// Application Routes
app.use("/customer",require('./routers/application/customerRouter') );
app.use("/receipt", require('./routers/application/receiptRouter'));
app.use("/motorcycle",require('./routers/application/motorcycleRouter') );
app.use("/rentalagreement",require('./routers/application/rentalAgreementRouter') );
app.use("/rentalcompany", require('./routers/application/rentalCompanyRouter'));

// Handlers
app.all("*", notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
