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
var num: number = 12
console.log(num)

// 字符串类型
var str: string = "Hello World"
str = "Hello 小卡车"

// 数组类型
let arr:number[] = [1,2,3,4,5,6,7,8,9]
console.log(arr)

let arr1: Array<number> = [1,2,3,4,5,6,7,8,9]
console.log(arr1)

// 元组类型
let arr2:[string, number, boolean] = ["小卡车", 18, true]
console.log(arr2)

// 枚举类型
enum Xkc {
  name = '小卡车',
  age = 18
}
var name1: Xkc = Xkc.name
var age: Xkc = Xkc.age
console.log(`姓名：${name1}\t年龄：${age}`)