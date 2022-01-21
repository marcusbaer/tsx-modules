export default function bar() {
  console.log('Hello from bar')

  const answer = 42;
  const foo = answer + '47';

  const h2 = document.createElement('h2')
  h2.textContent = `Hello from bar ${foo}`
  document.body.appendChild(h2)
}
