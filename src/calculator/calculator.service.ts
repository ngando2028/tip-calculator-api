import { Injectable } from '@nestjs/common';
import { CalculatorResult } from './entities/calculatorResult.entity';

@Injectable()
export class CalculatorService {
  calculator(
    bill: number,
    person: number,
    tipPercent?: number,
  ): CalculatorResult {
    const result: CalculatorResult = { result: false };
    if (!isNaN(bill) && !isNaN(person) && (!tipPercent || !isNaN(tipPercent))) {
      result.result = true;
      if (tipPercent && tipPercent > 0) {
        const totalTip = (bill * tipPercent) / 100;
        result.amount = totalTip / person;
        result.total = (bill + totalTip) / +person;
      } else {
        result.total = bill / person;
      }
    }
    return result;
  }
}
