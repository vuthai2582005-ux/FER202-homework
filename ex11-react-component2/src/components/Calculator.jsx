import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')

  const caculator = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Vui lòng nhập số hợp lệ')
      return;
    }

    let res = 0;
    switch (operator) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? n1 / n2 : 'Không chia cho 0'; break;
    }
    setResult(res)
  }
  return (
    <div>
      <h3>2. Arithmetic Calculator</h3>
      <div className="row">
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div>
          <button onClick={caculator}>
            Compute
          </button>
        </div>
      </div>

      <div>
        Result: {result}
      </div>

    </div>
  );
}

export default Calculator;