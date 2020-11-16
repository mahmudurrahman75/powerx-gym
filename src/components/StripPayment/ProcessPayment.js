import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripPayment from './StripPayment';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Hd77rL2HCjtpr77lnXMRVm43j1gqLP7BtwNLMHdntFDwhf3Af8XQ4gwwaHMkpUFZeGZP8yCph7Cp2SI5VTltLPO00q3LZQSQs');

const ProcessPayment = () => {
    return (
        <div className="col-md-6">
            <Elements stripe={stripePromise}>
                <SplitCardForm></SplitCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;