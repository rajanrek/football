import React from 'react';
import PaypalExpressBtn from './PayPalExpressCheckOut';
 
export default class MyApp extends React.Component {
    render() {		
        const onSuccess = (payment) => {
            console.log("Your payment was succeeded!", payment);
        }	        
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup! 
            console.log('You have cancelled the payment!', data);
        }	        
        const onError = (err) => {
 // The main Paypal's script cannot be loaded or somethings block the loading of that script! 
            console.log("Error!", err);
// Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js" 
// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			 
        }		            
        let currency = 'USD'; // or you can set this value from your props or state   
        let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout 
 return (
            <PaypalExpressBtn 
currency={currency}
total={total}
onError={onError}
onSuccess={onSuccess}
onCancel={onCancel}
 />
        );
    }  
 }