"use strict";
/*
 * @Author: your name
 * @Date: 2020-08-31 07:44:01
 * @LastEditTime: 2020-08-31 08:12:46
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
console.log(num);
// 字符串类型
var str = "Hello World";
str = "Hello 小卡车";
// 数组类型
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1);
// 元组类型
var arr2 = ["小卡车", 18, true];
console.log(arr2);
// 枚举类型
var Xkc;
(function (Xkc) {
    Xkc["name"] = "\u5C0F\u5361\u8F66";
    Xkc[Xkc["age"] = 18] = "age";
})(Xkc || (Xkc = {}));
var name1 = Xkc.name;
var age = Xkc.age;
console.log("\u59D3\u540D\uFF1A" + name1 + "\t\u5E74\u9F84\uFF1A" + age);
