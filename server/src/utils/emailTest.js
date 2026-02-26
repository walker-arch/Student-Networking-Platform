// generate a code to use email.js file to send email to "himanshuhaldar2000@gmail.com"

import { sendVerificationEmail } from './email';

sendVerificationEmail('himanshuhaldar2000@gmail.com', 'test-token').then(() => console.log('Email sent successfully')).catch((err) => console.error('Error sending email:', err));

