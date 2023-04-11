import React from "react";
import PaymentMethods from "./PaymentMethods";
import { usePaymentMethods } from "../hooks/usePaymentMethods.hook";
import { useRoundUp } from "../hooks/useRoundUp";
import { DonationCheckbox } from "./DonationCheckbox";
import { CountryPayment, PaymentStrategy } from "../models/CountryPayment";
import { formatButtonLabel, formatCheckboxLabel } from "../utils";

export const Payment = ({
  amount,
  strategy = new CountryPayment("$", (amount) => amount),
}: {
  amount: number;
  strategy?: PaymentStrategy;
}) => {
  const { paymentMethods } = usePaymentMethods();
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  );

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <button>{formatButtonLabel(strategy, total)}</button>
    </div>
  );
};
