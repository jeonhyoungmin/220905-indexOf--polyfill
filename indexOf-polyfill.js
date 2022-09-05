let example = [1,2,3,4,5,6,7,8,9]
let count = 0;

function customIndexOf(arr, value){
  
  for(const elementIndex in arr){
    count++
    
    if(arr[elementIndex] === value) {
      return elementIndex;
    }
    if(example.length === count)
    {
      return -1;
    }
  }
}

// ? javascript에서는 인덱스 접근에서 원하는 값을 찾지 못했을 때 숫자 -1을 리턴하는 특징이 있다.
// * 다른 언어에서 -1이 의미하는 바는 역순으로, js lastIndexOf()의 논리와 비슷하다.
console.log(customIndexOf(example, 1));