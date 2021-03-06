const Craftgate = require("@craftgate/craftgate");

const craftgate = new Craftgate.Client({
  apiKey: process.env.NEXT_PUBLIC_CRAFTGATE_API_KEY,
  secretKey: process.env.NEXT_PUBLIC_CRAFTGATE_SECRET_KEY,
  baseUrl: "https://sandbox-api.craftgate.io",
});

const paymentDetails = {
  walletPrice: 0.0,
  installment: 1,
  conversationId: "456d1297-908e-4bd6-a13b-4be31a6e47d5",
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
};

export default (req, res) => {
  const { items, card } = JSON.parse(req.body);

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  craftgate
    .payment()
    .createPayment({
      ...paymentDetails,
      price: totalPrice,
      paidPrice: totalPrice,
      items,
      card,
    })
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
};
