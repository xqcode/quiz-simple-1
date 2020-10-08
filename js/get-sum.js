/**
 * @description 求范围内（开区间） 3 的倍数的数字之和
 * @param {number[]} arr 排序或乱序的数组
 * @param {number} start 开始范围
 * @param {number} end 结束范围
 * @returns {number} 返回和
 */
const getSumOfTriple = (arr, start, end) => {
  // 请实现……

  //0、先验证是否为数组
  let arrAfter=Array.isArray(arr)?arr:[]
  let arrFilter=[];//

  //1、如果start和end有值，且为number类型,end数值大于start，筛选出大于等于start，小于end且为3的倍数的数组集合
  const startResult = typeof(start)==="number"
  const endResult =typeof(end)==="number"
  if(startResult&&endResult&&end>start){
    arrFilter=arrAfter.filter(item=>item>=start&&item<=end&&item%3===0)
  }else{
    //其他情况
    arrFilter=arrAfter.filter(item=>item%3===0)
  }

  //2.叠加遍历
  let sum=0;
  arrFilter.forEach(item=>{
    sum+=item;
  })

  return sum
};

// * ---------------- 实现的效果：

{
  const arr = [5, 8, 3, 9, 4, 7, 1, 2, 6];

  //          [      3  9              6]

  console.log(getSumOfTriple(arr)); // => 18
}

{
  // * arr = [0, 7, 14, 21, ... , 987, 994]
  const arr = Array.from({ length: 143 }, (e, i) => i * 7);

  // 203, 210, 217, 224, 231, 238, ..., 455, 462, 469, 476, 483, 490, 497
  //      210            231       ...       462            483

  console.log(getSumOfTriple(arr, 200, 500)); // => 4851
}
