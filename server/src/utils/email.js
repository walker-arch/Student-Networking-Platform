import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let transporter;

const createTransporter = async () => {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_PORT == 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    } else {
        console.log('No SMTP credentials found. Creating an Ethereal test account...');
        const testAccount = await nodemailer.createTestAccount();
        return nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }
};

export const sendVerificationEmail = async (email, token) => {
    if (!transporter) {
        transporter = await createTransporter();
    }

    const frontendUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const verifyUrl = `${frontendUrl}/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@studentnet.com',
        to: email,
        subject: 'StudentNet - Please verify your email',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
                <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h2 style="color: #2563eb; margin-top: 0; text-align: center;">Welcome to StudentNet!</h2>
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.5;">
                        We're excited to have you on board. Please verify your email address to complete your registration and start connecting with other students.
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${verifyUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                            Verify Email Address
                        </a>
                    </div>
                    <p style="color: #6b7280; font-size: 14px; text-align: center;">
                        If the button doesn't work, copy and paste this link into your browser:<br>
                        <a href="${verifyUrl}" style="color: #3b82f6; word-break: break-all;">${verifyUrl}</a>
                    </p>
                    <p style="color: #6b7280; font-size: 14px; text-align: center; margin-bottom: 0;">
                        This link will expire in 24 hours.
                    </p>
                </div>
            </div>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Verification email sent to ${email}`);

        if (!process.env.SMTP_USER) {
            console.log('====== TEST EMAIL PREVIEW ======');
            console.log(nodemailer.getTestMessageUrl(info));
            console.log('================================');
        }

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};
