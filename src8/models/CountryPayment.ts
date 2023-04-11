export interface PaymentStrategy {
  getRoundUpAmount(amount: number): number;

  getTip(amount: number): number;
  currencySign: string;
}

type RoundUpStrategy = (amount: number) => number;
export class CountryPayment {
  private readonly _currencySign: string;
  private readonly algorithm: RoundUpStrategy;

  public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this._currencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  get currencySign(): string {
    return this._currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return parseFloat((this.getRoundUpAmount(amount) - amount).toPrecision(10));
  }
}
