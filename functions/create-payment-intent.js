//domain/.netlify/functions/create-payment-intent
export async function handler(event, context) {
    if (event.body) {
        const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
        console.log(cart);
        return {
            statusCode: 200,
            body: JSON.stringify(cart),
        };
    }
    return {
        statusCode: 200,
        body: "Create payment intent",
    };
}
