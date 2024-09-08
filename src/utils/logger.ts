import { DateTime } from 'luxon';

export default function logger(...logMessages: any) {
    try {
        logMessages.forEach((message: any) => {
            console.log(DateTime?.now()?.toFormat('[ yyyy-LL-dd HH:mm:ss ]  '), message);
        })
    } catch (err) {
        console.log(logMessages);
        console.log(err);
    }
}