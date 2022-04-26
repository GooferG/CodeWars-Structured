function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

console.log(solution(null));
console.log(solution([20, 2, 10]));
