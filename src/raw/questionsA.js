module.exports = `
Q: How might you determine the efficiency of an algorithm
Determined by the Big O notation





Q: Why is it important?
So that we can have the code as smooth as possible. Speed is important. Planning for growth / scaling up





Q: What categories of complexities are described in Big O Notation
- Time complexity (How long code will take to execute as data increases)
- Space complexity (How much space is needed and how efficiently it is used. Possibly just look for them to understand the fact that there is often a trade off between time and space complexity.)

More space = less time and the other way around

(example: https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-cheatsheet.pdf)





Q: what is O(1)
Constant Time

- setting a variable once, performing a calculation, determining if an integer is even or odd. 

- basically a flat line on a graph. Easy to plan for.






Q: what is O( n )
Linear Time

- basic non-nested for loops, finding smallest or largest item in an unsorted array.

- asically a 45 degree line on graph, still easy to plan for, scaling probably won’t run away from you.






Q: what is O( n^2 )
N squared 

- basic nested for loops, bubble sort, insertion sort. 

- starts to get harder to plan for as data sets increase dramatically.





Q: what is O( log n )
Log N (Logarithmic Time) 

- binary search - when you can easily eliminate large sections of data on each iteration. 

- scaling large data sets won’t dramatically increase the output time.



cheatseet for this is here https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-cheatsheet.pdf

big-o-notation-in-plain-english is here https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-notation-in-plain-english.pdf (especially page 1 bottom and page 2)

big-o-notation-table-for-interviews is here: https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-notation-table-for-interviews.pdf




Q: Describe 3 differences between a linked list and an array
Linked list
- Non-contiguous space requirement.  Ex: Data doesn’t HAVE to be in same space on disk.
- Can be more efficient for memory allocation.  Easier to resize.
- Can be less efficient for caching (not contiguous)
- No “find by index” feature, so accessing individual elements can be slower
- Easier to add elements (insert nodes) to various positions within list.

Array
- Must be in same contiguous disk space. 
- Harder to resize. Also, increasing length may require moving the array in memory to a larger space.
- Better caching - all addresses are contiguous
- Fast access for reading when searching by index
- Harder to insert new elements to front and within the array as you then have to shift existing elements after the new element is added.





Q: the difference between a Binary Tree and a Binary Search Tree
BST: All left descendants are less than or equal to node, and all right descendants are greater than node.
(example: https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/data-structures-binary-trees/binary-search-tree-graph.jpg)




Q: describe the 3 types of BST traversal:

In-order (from the smallest number to the biggest) (ex: 10, 25, 32)
- Visit left branch, then current node, then right branch. Visits all nodes in ascending order on a BST.

Pre-order (looks like the “<“ sign) (node first, branches last) (ex: 25, 10, 32)
- Visits current node first, then left branch, then right branch.  Root node is always first node visited. Useful for directory structures, organisation charts

Post-order (looks like the “>“ sign) (branches first, node last) (ex: 10, 32, 25)
- Visits left branch, then right branch, then current node.  Root node is always last visited. Useful for language processors



Q: Algorithms for searching through arrays and trees 

- Linear search (https://www.youtube.com/watch?v=-PuqKbu9K3U) - look through an array one-by-one until you find what you are looking for
- Binary search (https://www.youtube.com/watch?v=iP897Z5Nerk) - narrow it down by always guessing in the middle of the range. So you would start at 50 (half-way between 0 and 100), then if you were too high go to 25 (half-way between 0 and 50), then if you were too low go to 37 (half-way between 25 and 50), and so on.
- Depth-first search - traverse as far as you can down the tree before back-tracking (ex: check if a person related to a past has the right to be a king).
- Breadth-first search -  search works across the rows of a tree (the top row will be handled first, then the second row, and so on) (ex: check if multiple people from the same generation are part of the royal family)



Q: how the arrays sorting methods work 

Merge sort works like this :
- DIVIDE THE UNSORTED LIST INTO N SUBLISTS, each containing 1 element (a list of 1 element is considered sorted).
- repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
(example: https://www.youtube.com/watch?v=XaqR3G_NVoo)


Bubble sort works like this:
- REPEATEDLY SWAPPING the adjacent elements if they are in wrong order.
(example: https://www.youtube.com/watch?v=lyZQPjUT5B4)


Quick sort works like this :
- DIVIDE AND CONQUER algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.
(example: https://www.youtube.com/watch?v=ywWBy6J5gz8)


Selection sort works like this:
- REPEATEDLY FINDING THE MINIMUM ELEMENT (considering ascending order) from unsorted part and putting it at the beginning
(example: https://www.youtube.com/watch?v=Ns4TPTC8whw)


Insertion sort works like this : 
- begin at the left-most element of the array and invoke Insert to INSERT EACH ELEMENT ENCOUNTERED INTO ITS CORRECT POSITION. 
- The ordered sequence into which the element is inserted is stored at the beginning of the array in the set of indices already examined.
(example: https://www.youtube.com/watch?v=ROalU379l3U&t=97s)


Heap sort works like this :
- involves preparing the list by first TURNING IT INTO A MAX HEAP (a complete Binary Tree represented as an array) 
- then repeatedly swaps the first value of the list with the last value, decreasing the range of values considered in the heap operation by one, and sifting the new first value into its position in the heap.
(example: https://www.youtube.com/watch?v=Xw2D9aJRBY4)


https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/algorithms-sorting/algorithms-arrays-sorting.gif






Q: What are the arrays sorting methods by speed
The slowest is selection, then bubble, then insertion, then shell, then merge, then heap, then quick, then quick3

Memory tricks to remember the speed order:
- by sentence: 
-—> The SELECTED, BUBBLE can’t INSERT into the SHELL while MERGING the HEAP QUICKly
- by abbreviation:
-—> Se.Bu.In.Sh.Me.He.Qs
- or find a rhythm to rap it :-)






Q: What is faster than a bubble sort?
Insert, Shell, Heap, Merge, Quick and Quick3

https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/algorithms-sorting/algorithms-arrays-sorting.gif`;
