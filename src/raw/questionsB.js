module.exports = `
Q: Create an algorithm for counting how many times a word appears in a document.
*
const lib = {}

'hello hey hello hey'.split(' ').forEach(word => {
  lib[word] = lib[word] + 1 || 1
})
console.log(lib)
*

For this answer, the candidate should be directed to the choice of data structure if they need some hints.

The best choice of data structure for this will be a Hashmaps. 
- First, we will go through the document hashing each word in a hashmap and as we do so, we will increment the count of each word. 
- Hashmaps are key-value pairs. In this case, the word will be the key to hash and its value will be the count of the word. 
- This is O(1) operation. Then once all the words are hashed, we will do a lookup of the word that we want and find and from the word, we can get its count to find out how many times the word is used in the document. 
- This lookup will be a O(1) operation. Hashmaps will be the right choice due to its O(1) insert and lookup.



Q: Develop an algorithm to find the Fibonacci series of a given number.

function fib(n) {
  if (n < 2) {return n} // base case

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7))

Using recursion would be an elegant solution from a readability point of view since it will require 2-3 lines of code.

You will have a base case to stop the recursion – this could be:
if (n<=2)
return 1

Then you will recursively call the function to add the previous 2 numbers – this will be something like:
return fib(n-1) + fib(n-2)

EXTRA:
- Define what is a Fibonacci sequence is (The Fibonacci sequence is one where a number is found by adding up the two numbers before it. 
- Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13...). What is the 7th value in the Fibonacci sequence? 
- Can you explain how you came up with your solution?




Q: What is the runtime of the Fibonacci recursive algorithm? what can you tell me about this runtime?

Exponential O(2^n). This is not a desirable runtime if we were to find the Fibonacci sequence for a large number because the runtime will grow exponentially. 

Although the code looks very elegant, it would be better to implement this using iterative approach or using memorization to cache the results of each recursive calls to be used without calling the function again.




Q: You are given a dataset. How would you create a balanced binary search tree from it?

const data = [1,2,3,4,5]

//    3
//  2   4
// 1     5

A balanced binary search tree can be defined as one where the height of the left and right subtree can’t differ by more than one. 
Which means that there should be almost equal dataset on each sub tree of the left and right child of the root. 
In order to do this, find out if the data is sorted. If it is not, then you can use one of the efficient sorting algorithms such as quicksort or merge sort to sort the data. 
Once the data is sorted, then we will find the middle of the dataset and use that as the root. 
This way we can say that there will be almost equal amount of data on each side of the middle element.

Then we will use the same strategy to find the middle of the left hand side to find the left child and the middle of the right hand side to find the right child. 
And we will continue doing this on each halves recursively until there is no more element left.


Q: Design an algorithm to find the nth element in a linked list in constant time.

Linked list do not allow random access. 
Therefore it is not possible to find the nth element in constant time. 
The only way you can have a O(1) access is if you are finding the 1st element. 
Otherwise finding an element in a linked list will require O(n) run time.





Q: A binary search tree has 20 nodes and is relatively balanced. The root is considered to be at level 0. How many nodes are there at level 4?

Answer:
level 0 = 1 node
level 1 = 2 nodes
level 2 = 4 nodes
level 3 = 8 does
level 4 = only 5 nodes left to make a total of 20 (these are their values: 1 2 4 8 16) 




Q: You are given a dataset containing positive and negative integers. Write an algorithm to find the largest sum in a continuous sequence.

<code>
let maxSubarray = function(arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        maxEndingHere = Math.max(0, maxEndingHere + item);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log(item, maxEndingHere, maxSoFar);
    }
    return maxSoFar;
};
</code>

Q: Write a function to remove duplicates in a linked list.

<code>
let list = new LinkedList;

let currentNode1 = list.head;
while (currentNode1) {

   let currentNode2 = currentNode1.next;
   while (currentNode2) {
     if (currentNode2.value === currentNode1.value) {
       list.remove(currentNode2);
     }
     currentNode2 = currentNode2.next;
   }

   currentNode1 = currentNode1.next;
}
</code>

The common solution is O(n^2). Check every node data against every other node data and if find dupli­cates, delete that node.

Solve this in O(n) if they have done it in O(n^2). The O(n) will require different approach:
- If it is a sorted list then check the current node with the next one and delete the duplicates
- If the list is not sorted, create a hash table
- Iterate through the list - if the data is present in the hash table, delete that node otherwise continue adding the node value into the hash table - run time is O(n), assuming hash table insertion is O(1)


Q: Write an algorithm that takes an alphanumeric phone number and returns its actual phone number. For example if you type 1-800-Flowers it should return 1-800-3569377. You can ignore spaces and any punctuation). What is the runtime of your algorithm?

** NOTE ** this solution is not well written
<code>
const numberKeys = {
   'abc': 1,
   'def': 2,
   'ghi': 3,
}

'1-800-Flowers'.split('').forEach((char, idx) => {

Object.keys(numberKeys).forEach(el => {

     number[el]
   })

})

console.log(Object.keys(numberKeys))
</code>




Q: Given the following expression, write an algorithm to check if the formula has correctly implemented parenthesis (check to see if there are any lone parenthesis. That every open parenthesis has a closed on) - Check if the formula has any unmatched parenthesis.

Test cases:
x*(x+z) + x/(y-z) + d should return true
t – (s-k + x should return false

How would you change this to account for other parenthesis such as {}, [].



 Q: Explain how you would write an algorithm to find the middle element of a linked list
 - Parse the linked list element by element from the beginning to the end and count the total number of elements. 
 - After that parse the list again and stop at the element with the index = counter/2




Q: write an O(n^2) / O(1) / O( n ) /  O(log n) algorithm 
O(1):
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/o-1-example.js 

O(n):
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/o-n-example.js 

O(2n):
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/o-2-n-example.js 

O(log n):
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/o-log-n-example.js 

O(n^k):
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/o-n-k-example.js


Q: give a binary search tree example in JS 
** ATTENTION ** look in ./src/datastructures and README.md line 11
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/data-structures-binary-trees/binary-search-tree-example.js


Q: give an example of a hash map 
** ATTENTION ** look in ./src/datastructures and README.md line 11
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/data-structures-hash-maps/hash-map-example.js


Q: create a linked list in JS 
** ATTENTION ** look in ./src/datastructures and README.md line 11
https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/data-structures-linked-lists/linked-list-example-es6.js (line 1 to 150 or so)`