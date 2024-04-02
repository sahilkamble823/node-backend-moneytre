const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const adminRoutes = require('../MoneytreBackend/routes/AdminRoutes');
const feedbackRoutes = require('../MoneytreBackend/routes/FeedbackRoutes');
const contactusRoutes = require('../MoneytreBackend/routes/ContactusRoutes');
const blogRoutes = require('../MoneytreBackend/routes/BlogRoutes');
const archiveRoutes = require('../MoneytreBackend/routes/ArchivesRoutes');
const port = 5000;

app.use(express.json({ limit: '50mb' }));
app.use(express.json());
app.use(cors());

app.use('/moneytre/admin',adminRoutes);
app.use('/moneytre/feedback',feedbackRoutes);
app.use('/moneytre/contactus',contactusRoutes);
app.use('/moneytre/blog',blogRoutes);
app.use('/moneytre/archives',archiveRoutes);

app.listen(port, () => {    
    console.log(`Server is running on port: ${port}`);
});
