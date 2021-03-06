// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// *The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// * Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point b.
// * When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

function countApplesAndOranges(s, t, a, b, apples, oranges) {
   let appleInHouse = 0;
   let orangesInHouse = 0;

   for (let i = 0; i < apples.length; i++) {
      if ((a + apples[i] >= s) && (a + apples[i] <= t)) {
         appleInHouse++
      }
   }

   for (let j = 0; j < oranges.length; j++) {
      if ((b + oranges[j] >= s) && (b + oranges[j] <= t)) {
         orangesInHouse++
      }
   }

   console.log(appleInHouse)
   console.log(orangesInHouse)
}


countApplesAndOranges(5, 15, 3, 2, [-2,2,1], [5,-6])