import { PaymentStrategy } from "../models/CountryPayment";
import { PaymentMethod } from "../models/PaymentMethod";
import { RemotePaymentMethod } from "../types";

export const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return [];
  }

  const payInCash = new PaymentMethod({ name: "cash" });

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );
  extended.push(payInCash);

  return extended;
};

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: PaymentStrategy
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
};

export const formatButtonLabel = (strategy: PaymentStrategy, total: number) => {
  return `${strategy.currencySign}${total}`;
};
