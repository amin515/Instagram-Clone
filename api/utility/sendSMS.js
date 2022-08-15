
// import Vonage from '@vonage/server-sdk';

import axios from "axios"

// const vonage = new Vonage({
//   apiKey: "f63023c7",
//   apiSecret: "4XMgXrROjNXP0jfl"
// })


// export const sendSMS = () => {
//     const from = "Vonage APIs"
//     const to = "8801303292586"
//     const text = 'Welcome to Nur Amin Instagram'
    
//     vonage.message.sendSms(from, to, text, (err, responseData) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if(responseData.messages[0]['status'] === "0") {
//                 console.log("Message sent successfully.");
//             } else {
//                 console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//             }
//         }
//     })
// }



export const sendSMS = async (Number, Message) => {
  
  try {

    await axios.post(` https://bulksmsbd.net/api/smsapi?api_key=IGM1aPK46DxE5wXZO5Qu&type=text&number=${Number}&senderid=(Approved Sender ID)&message=${Message}`)
    

  } catch (error) {
     console.log(error)
  }
  
}