"use strict";
/*
 * @Author: your name
 * @Date: 2020-08-31 07:44:01
 * @LastEditTime: 2020-08-31 09:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\TypeScriptLearn\typescript\02-types.ts
 */
/*
  布尔类型（boolean）
  数字类型（number)
  字符串类型（string）
  数组类型（array）
  元组类型（tuple）
  枚举类型（enum）
  任意类型（any）
  null 和 undefined
  void 类型
  never类型
  */
// 数字类型
var num = 12;
console.log(num); // 12 
// 字符串类型
var str = "Hello World";
str = "Hello 小卡车";
// 数组类型
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3);
// 元组类型
var arr2 = ["小卡车", 18, true];
console.log(arr2); // ["小卡车", 18, true]
// 枚举类型
// 有赋值的情况
var Xkc;
(function (Xkc) {
    Xkc["name"] = "\u5C0F\u5361\u8F66";
    Xkc[Xkc["age"] = 18] = "age";
})(Xkc || (Xkc = {}));
var name1 = Xkc.name;
var age = Xkc.age;
console.log("\u59D3\u540D\uFF1A" + name1 + "\t\u5E74\u9F84\uFF1A" + age); // 姓名：小卡车    年龄：18
// 没有赋值的情况，默认值默认为下标值，从编译出来的js文件的可以看出
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var red = Color.red;
var green = Color.green;
var blue = Color.blue;
console.log(red); // 0
console.log(green); // 1
console.log(blue); // 2
// 部分赋值的情况，默认赋值的下一个开始每个递增加一
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 6] = "green";
    Color1[Color1["blue"] = 7] = "blue";
    Color1[Color1["orange"] = 1] = "orange";
    Color1[Color1["black"] = 2] = "black";
})(Color1 || (Color1 = {}));
var red1 = Color1.red;
var green1 = Color1.green;
var blue1 = Color1.blue;
var orange1 = Color1.orange;
var black1 = Color1.black;
console.log(red1); // 0
console.log(green1); // 6
console.log(blue1); // 7
console.log(orange1); // 1
console.log(black1); // 2
// 枚举可由值获得键名
var colorName = Color1[6];
console.log(colorName); // green
// 任意类型
var any1 = "小卡车";
any1 = 18;
any1 = true;
console.log(any1); // true
// undefined 类型
var num1;
// console.log(num1)  // 编译不通过，报错，但是可以显示值为 undefined
var num2;
console.log(num2); // undefined
var num3;
console.log(num3); // undefined
// null 类型
var num4;
console.log(null); // null
// num4 = 123            // 报错
// void 类型
function fn1() { }
fn1();
// never 类型
function error(message) {
    throw new Error(message);
}
