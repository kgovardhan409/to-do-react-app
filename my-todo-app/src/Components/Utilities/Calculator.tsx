import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [res, setRes] = useState<number | string>('');

  const handleCalculation = (operator: string) => {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid';
    }
    setRes(result);
  };

  return (
    <>
      <input
        type="number"
        style={{ padding: '10px', marginRight: '5px' }}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        placeholder="Enter Number"
      />

      <button style={btnStyle} onClick={() => handleCalculation('+')}><b>+</b></button>
      <button style={btnStyle} onClick={() => handleCalculation('-')}><b>-</b></button>
      <button style={btnStyle} onClick={() => handleCalculation('*')}><b>*</b></button>
      <button style={btnStyle} onClick={() => handleCalculation('/')}><b>/</b></button>

      <input
        type="number"
        style={{ padding: '10px', marginLeft: '5px' }}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
        placeholder="Enter Number"
      />

      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Result: {res}
      </div>
    </>
  );
};

const btnStyle = {
  padding: '10px',
  marginRight: '5px',
};

export default Calculator;
