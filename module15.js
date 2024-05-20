// Яка npm команда запустить скрипт з ім'ям do-stuff? npm run do-stuff
// {
//     "scripts": {
//         "do-stuff": "just do some stuff"
//     }
// }
// Скрипти з ім'ям start, test, build можна запускати без run
// Як розшифровується абревіатура ESM? ECMAScript Modules
// Які типи експорту є в ESM? "Named export" та "Default export"
// Який тип експорту зображено на ілюстрації? export const value = 5; Named export
// Який тип експорту зображено на ілюстрації? export default function foo()  { //.. } Default export
// Чи відбудеться експорт value? export default value = 5; False
// Яке значення експортуватиметься? Буде помилка
// export default 5;
// export default 10;
// Який тип імпорту зображено на ілюстрації? Named import
// import { username, age } from "./user-data";
// Як зробити імпорт усіх експортів модуля у вигляді одного об'єкта userdata? import * as userdata from "path/to/user"
// user.js
// const username = "Mango";
// export const age = 20;
// export const hobby = "coding";
// export default username;