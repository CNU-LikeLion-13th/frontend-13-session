/*
### 미션5. 배열 요소 모두 더하기
배열의 모든 요소를 더한 값을 출력하세요.

```js
let numbers = [3, 7, 2, 8, 5];
let sum = 0;
```
*/

let numbers = [3, 7, 2, 8, 5];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
