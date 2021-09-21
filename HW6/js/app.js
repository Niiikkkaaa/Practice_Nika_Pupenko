//Ситуация №1

// button.addEventListener('click', () => {
//   Promise.resolve().then(() => console.log('Microtask 1'));
//   console.log('Listener 1');
// });
 
// button.addEventListener('click', () => {
//   Promise.resolve().then(() => console.log('Microtask 2'));
//   console.log('Listener 2');
//});
  
//При старте программы в web api регистрируется асинхронный слушатель 'click' 
//При клике на кнопку Button, функции попадут в callback queue. 
//Из очереди верхняя функция попадёт в сallstack. 
//функция, переданная в then не будет вызвана синхронно, даже с разрешённым промисом 
//console.log('Microtask 1')) попададёт в Web api, и в очередь микрозадач
//Выполнится console.log('Listener 1') и затем console.log('Microtask 1') попадёт в сallstack и выполнится
//После выполнения первой, вторая функция выполнится аналогичным образом, в результате получится:

//Listener 1
//Microtask 1
//Listener 2
//Microtask 2

//Ситуация №2

// button.addEventListener('click', () => {
//   Promise.resolve().then(() => console.log('Microtask 1'));
//   console.log('Listener 1');
// });
   
// button.addEventListener('click', () => {
//   Promise.resolve().then(() => console.log('Microtask 2'));
//   console.log('Listener 2');
// });
  
// button.click();
  
//При старте программы в web api регистрируется асинхронный слушатель 'click' 
//При вызове функции click(), в отличие от первой ситуации, функции в callback queue попадать не будут 
//console.log('Microtask 1')) попададёт в Web api и в очередь микрозадач
//console.log('Listener 1') попадёт в callstack и выполнится
//console.log('Microtask 2')) попададёт в Web api и в очередь микрозадач
//console.log('Listener 2') попадёт в callstack и выполнится
//console.log('Microtask 1') и console.log('Microtask 2') попадут в callstack и выполнятся, в результате получится:

//Listener 1
//Listener 2
//Microtask 1
//Microtask 2
