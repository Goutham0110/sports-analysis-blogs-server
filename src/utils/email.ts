import configs from "../config/configs";
import Models from "../models";
import logger from "./logger";
import nodemailer from 'nodemailer';

async function sendEmail(data: Record<string, string>) {
    // TODO: use gmail apis to send mail

    const transporter = nodemailer.createTransport({
        service: configs.NOTIFICATION_EMAIL_SERVICE,
        auth: {
            user: configs.NOTIFICATION_EMAIL,
            pass: configs.NOTIFICATION_EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: configs.NOTIFICATION_EMAIL,
        to: data.to,
        subject: data.subject,
        text: data.text
    }
    
    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            logger("Error in sending eMail", err);
        } else {
            logger(`Successfully sent eMail to ${mailOptions.to}`);
        }
    });
}

async function sendNewPostEmailToAll(newPost: Blog) {
    try {
        // TODO: improve text in mail
        const emailProcess: Promise<void>[] = [];
        const subscriberList = await Models.Subscriber.find();
        subscriberList.forEach((subscriber) => {
            const emailTask = sendEmail({
                to: subscriber.email,
                subject: `New post alert - ${newPost.title}`,
                text: 'New Post'
            });
            emailProcess.push(emailTask);
        })
        await Promise.all(emailProcess);
    } catch (err: Error | undefined | any) {
        logger(err.name, err.message);
    }
};

export default {
    sendEmail,
    sendNewPostEmailToAll
}