import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51R6HFMIODmfWkDg37vMLBXiYmCbs8KzRKdAlBbZjuXjb3NNrRX2zSRzT3G7UgKto6baUaiLX4MGFCbgfTskcHMR900ThYsarNF'); // Replace with your Stripe publishable key

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      setSucceeded(true);
      console.log('Payment method created successfully: ', paymentMethod);
      // Here you can also call your backend to process the payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {succeeded && <p className="text-green-500">Payment Successful!</p>}
    </form>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
