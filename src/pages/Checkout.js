import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51I7wl6DlixAIeKT9L0Q4zIbfxZUQwHnWTkCFVVrQVZcaYfnExvr3DatkFvYbdhqnOMUDO0eK7exzPZrhJSZl7D3W00fpklh5XA');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
