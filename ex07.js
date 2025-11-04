function getReduction(price, age) {
  if (age <= 6) {
    return 0;
  }
  if (age <= 18)
    {
      return price - price * 0.5
    }
  if (age >= 25)
    {
      return price - price * 0.3
    }
}

console.log(getReduction(10, 5)); 
console.log(getReduction(150, 25));