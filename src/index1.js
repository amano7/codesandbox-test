/**
 * copnst で定義した変数はプロパティーの変更が可能
 */

//  /**
//   * テンプレート文字列
//   */

//   // 従来の方法
//  const name = "amano";
//  const age = 60;

//  const message1 = "私の名前は" + name + "です。　年齢は" + age + "です";

//  console.log(message1);

//  //  テンプレート文字列
//  const message2 = `私の名前は${name}です。　年齢は${age}です`;
//  console.log(message2);

/**
 * 配列のコピーはスプレッド構文を使う
 */
const arr1 = [10, 20, 30, 40];
console.log(arr1);
const arr2 = [...arr1];
arr2[0] = 100;
console.log(arr1);
console.log(arr2);
