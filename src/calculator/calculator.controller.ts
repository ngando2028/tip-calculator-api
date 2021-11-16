import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  calculator(@Query() query) {
    const { bill, person, tipPercent } = query;
    return this.calculatorService.calculator(+bill, +person, +tipPercent);
  }
}
