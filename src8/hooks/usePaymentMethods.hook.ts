import { useEffect, useState } from "react";
import { fetchPaymentMethods } from "../api";
import { PaymentMethod } from "../models/PaymentMethod";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    fetchPaymentMethods().then((methods) => setPaymentMethods(methods));
  }, []);

  return {
    paymentMethods,
  };
};
