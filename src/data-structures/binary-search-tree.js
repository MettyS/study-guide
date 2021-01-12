const colors = require('colors');

class Node {
  /* IMPLEMENT ME */
}

class BinarySearchTree {
  /* IMPLEMENT ME */
}

// ***********
//  EXAMPLE 1 - (partially completed only)
// ***********

/*
 class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root
  }

  getRootNode() {
    return this.root;
  }

  insert(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return;
    }
    if(this.root.value === null) {
      this.root.value = val;
      return;
    }

    let leadingPtr = val < this.root.value 
            ? this.root.left 
            : (val > this.root.value 
                  ? this.root.right 
                  : null );

    let trailingPtr = this.root;

    this.insertRecur(val, leadingPtr, trailingPtr);

  }

  insertRecur(val, ptr, trailingPtr) {
    if(ptr === null) {
      if(val < trailingPtr.value) 
        trailingPtr.left = new Node(val);
      else
        trailingPtr.right = new Node(val);
      return;
    }

    let leadingPtr = val < ptr.value 
            ? ptr.left 
            : ptr.right;

    this.insertRecur(val, leadingPtr, ptr)
  }

  inorder(root) {
    let printout = root !== null
                ? this.inorder(root.left)+`${root.value}`+this.inorder(root.right) 
                : '';
    
    return printout
  }
}
*/

// ***********
//  EXAMPLE 2
// ***********

/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}
*/

// create an object for the BinarySearchTree
let BST = new BinarySearchTree();

try {
  // Inserting nodes to the BinarySearchTree
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);

  //          15
  //         /  \
  //        10   25
  //       / \   / \
  //      7  13 22  27
  //     / \    /
  //    5   9  17

  let root1 = BST.getRootNode();

  // prints 5 7 9 10 13 15 17 22 25 27
  BST.inorder(root1);

  // Removing node with no children
  BST.remove(5);

  //          15
  //         /  \
  //        10   25
  //       / \   / \
  //      7  13 22  27
  //       \    /
  //        9  17

  let root2 = BST.getRootNode();

  // prints 7 9 10 13 15 17 22 25 27
  BST.inorder(root2);

  // Removing node with one children
  BST.remove(7);

  //          15
  //         /  \
  //        10   25
  //       / \   / \
  //      9  13 22  27
  //            /
  //           17

  let root3 = BST.getRootNode();

  // prints 9 10 13 15 17 22 25 27
  BST.inorder(root3);

  // Removing node with two children
  BST.remove(15);

  //          17
  //         /  \
  //        10   25
  //       / \   / \
  //      9  13 22  27

  let root = BST.getRootNode();
  // prints 9 10 13 17 22 25 27

  console.log(colors.green('inorder traversal'));
  BST.inorder(root1);

  console.log(colors.green('postorder traversal'));
  BST.postorder(root2);

  console.log(colors.green('preorder traversal'));
  BST.preorder(root3);
} catch (er) {
  console.log(colors.red('***** DID NOT PASS TESTS *****'));
  console.log(colors.red('error: \n', er));
}

// original solution provided by Sumit Ghosh (https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
