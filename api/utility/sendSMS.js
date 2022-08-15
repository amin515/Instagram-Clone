
import Vonage from '@vonage/server-sdk';

const vonage = new Vonage({
  apiKey: "f63023c7",
  apiSecret: "4XMgXrROjNXP0jfl"
})


export const sendSMS = () => {
    const from = "Vonage APIs"
    const to = "8801303292586"
    const text = 'Welcome to Nur Amin Instagram'
    
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}