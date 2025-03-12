// Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função
// que as receba como parâmetro.A função deve mostrar o valor resultante:

import { add } from "./ex7.js";
import { multiply } from "./ex8.js";



function executeFunction(func, x, y) {
    return func(x, y);
}
console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6
