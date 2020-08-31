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
var num: number = 12
console.log(num)      // 12 

// 字符串类型
var str: string = "Hello World"
str = "Hello 小卡车"

// 数组类型
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)      // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1)        // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr3: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr3)

// 元组类型
let arr2: [string, number, boolean] = ["小卡车", 18, true]
console.log(arr2)      // ["小卡车", 18, true]

// 枚举类型
// 有赋值的情况
enum Xkc {
  name = '小卡车',
  age = 18
}
var name1: Xkc = Xkc.name
var age: Xkc = Xkc.age
console.log(`姓名：${name1}\t年龄：${age}`)    // 姓名：小卡车    年龄：18
// 没有赋值的情况，默认值默认为下标值，从编译出来的js文件的可以看出
enum Color {
  red,
  green,
  blue
}
var red: Color = Color.red
var green: Color = Color.green
var blue: Color = Color.blue
console.log(red)      // 0
console.log(green)    // 1
console.log(blue)     // 2
// 部分赋值的情况，默认赋值的下一个开始每个递增加一
enum Color1 {
  red,
  green = 6,
  blue,
  orange = 1,
  black
}
var red1: Color1 = Color1.red
var green1: Color1 = Color1.green
var blue1: Color1 = Color1.blue
var orange1: Color1 = Color1.orange
var black1: Color1 = Color1.black
console.log(red1)         // 0
console.log(green1)       // 6
console.log(blue1)        // 7
console.log(orange1)      // 1
console.log(black1)       // 2
// 枚举可由值获得键名
let colorName: string = Color1[6]
console.log(colorName)   // green

// 任意类型
var any1: any = "小卡车"
any1 = 18
any1 = true
console.log(any1)       // true

// undefined 类型
var num1: number
// console.log(num1)  // 编译不通过，报错，但是可以显示值为 undefined
var num2: undefined
console.log(num2)     // undefined
var num3: number | undefined
console.log(num3)     // undefined

// null 类型
var num4: null
console.log(null)     // null
// num4 = 123            // 报错

// void 类型
function fn1(): void { }
fn1()

// never 类型
function error(message: string): never {
  throw new Error(message)
}

