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

    // !isNaN(tipPercent): tip is number or tip undefine
    //!tipPercent: none
    if (bill && person && (!isNaN(tipPercent) || !tipPercent)) {
      result.result = true;
      if (!isNaN(tipPercent) && tipPercent > 0) {
        const totalTip = (bill * tipPercent) / 100;
        result.amount = totalTip / person;
        result.total = (bill + totalTip) / +person;
      } else {
        result.amount = 0;
        result.total = bill / person;
      }
    }
    return result;
  }
}
