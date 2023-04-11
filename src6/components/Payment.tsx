import React from "react";
import PaymentMethods from "./PaymentMethods";
import { usePaymentMethods } from "../hooks/usePaymentMethods.hook";
import { useRoundUp } from "../hooks/useRoundUp";
import { DonationCheckbox } from "./DonationCheckbox";

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  countryCode: string
) => {
  const currencySign = countryCode === "JP" ? "¥" : "$";

  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${currencySign}${tip} to charity.`;
};

export const Payment = ({
  amount,
  countryCode,
}: {
  amount: number;
  countryCode: string;
}) => {
  const { paymentMethods } = usePaymentMethods();
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    countryCode
  );

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, countryCode)}
      />
      <button>
        {countryCode === "JP" ? "¥" : "$"}
        {total}
      </button>
    </div>
  );
};
