## async/await:

`async` and `await` are keywords in JavaScript that enable working with asynchronous code more easily. 

1. The `async` keyword is used before a function definition to mark it as asynchronous, allowing the function to pause its execution until a promise is resolved or rejected.

2. The `await` keyword can only be used inside functions declared with `async`.

It pauses the execution of the function until the awaited promise resolves, making asynchronous code appear more like synchronous code, which is easier to read and understand.

You should use `await` when you want to wait for a promise to resolve before continuing with the next line of code.

### Example (asynchronous function):

```javascript
async function run() {
  console.log('Execution started...');

// waiting for the fulfillment of the promise
  const message = await delay(2000); // waiting 2 sec.
  console.log('Message:', message); // display a message after the delay is completed
}
run()
```
Here, we first log the message `'Execution started...'`.
Then, using `await`, we wait for the promise returned by the `delay` function to resolve, which creates a pause.
After the `delay` completes (after 2 seconds), the message `'Delay completed'` will be logged.

______

`async` и `await` это ключевые слова в JS, которые позволяют работать с асинхронным кодом.

1. Ключевое слово `async` используется перед определением функции, что бы приостановить выполнение функции

2. `await` можно использовать только внутри функций объявленных с `async`.

`await` приостанавливает выполнение функции до тех пор, пока не будет выполнено ожидаемое, что делает асинхронный код более похожим на синхронный код, который легче читать и понимать.

Вам следует использовать "`await`", когда вы хотите дождаться разрешения promise, прежде чем переходить к следующей строке кода.

### Пример (асинхронная функция):

```javascript
async function run() {
  console.log('Execution started...');

// ожидание выполнения промиса
  const message = await delay(2000); // ожидаем 2 секунды
  console.log('Message:', message); // выводим сообщение после завершения задержки
}
```
Здесь мы сначала выводим сообщение `Выполнение начато...".`
Затем, используя "`await`", мы ожидаем разрешения запроса, возвращаемого функцией "`delay`", что создает паузу.
После завершения "`await`" (через 2 секунды) будет выведено сообщение "`Задержка завершена`".
