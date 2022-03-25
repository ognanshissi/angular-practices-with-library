export namespace CalculatorService {
    export const add = (...numbers: number[]) => numbers.reduce((prev, currentValue) => prev + currentValue, 0)
    
}