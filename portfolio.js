let expression = '';

function insert(value) {
  expression += value;
  document.getElementById('output').innerText = expression;
}

function del() {
  expression = expression.slice(0, -1);
  document.getElementById('output').innerText = expression;
}

function c() {
  expression = '';
  document.getElementById('output').innerText = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('output').innerText = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('output').innerText = 'Error';
    expression = '';
  }
}
