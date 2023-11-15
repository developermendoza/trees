// Binary tree
// Node class for a binarhy tree

class TreeNode {
  constructor(data) {
    this.data = data; // the data stored in the node
    this.left = null; // reference to the left child
    this.right = null; // reference to the right child
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // The root of the tree, initially empty
  }

  // Mehod to insert a new node into the binary tree
  insert(data) {
    const newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode; //If the tree is empty, make the new node the root node
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // helper method to recursively insert a new node
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode; // Insert to the left if the left child is empty
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // insert to the right if the right child is empty
      } else {
        this.insertNode(node.right, newNode); // Recursively insert to the right node
      }
    }
  }
  // method to perform an in-order traversal of the binary tree
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback); // traverse left subtree
      callback(node.data); // Process current node
      this.inOrderTraversal(node.right, callback); // Traverse right subtree
    }
  }

  // Method to perform a pre-order traversal of the binary tree
  preOrderTraversal(node, callback) {
    if (node !== null) {
      callback(node.data); // Process current node
      this.preOrderTraversal(node.left, callback); // Traverse left subtree
      this.preOrderTraversal(node.right, callback); // Traverse right subtree
    }
  }

  // Method to perform a post-order traversal of the binary tree
  postOrderTraversal(node, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback); // Traverse left subtree
      this.postOrderTraversal(node.right, callback); // Traverse right subtree
      callback(node.data); // Process current node
    }
  }
}

// Usage
const myBinaryTree = new BinaryTree();
myBinaryTree.insert(5);
myBinaryTree.insert(3);
myBinaryTree.insert(7);
myBinaryTree.insert(2);
myBinaryTree.insert(4);
myBinaryTree.insert(6);
myBinaryTree.insert(8);

// In-order traversal
console.log("In-order traversal:");
myBinaryTree.inOrderTraversal(myBinaryTree.root, (data) => console.log(data)); // Outputs: 2, 3, 4, 5, 6, 7, 8

// Pre-order traversal
console.log("Pre-order traversal:");
myBinaryTree.preOrderTraversal(myBinaryTree.root, (data) => console.log(data)); // Outputs: 5, 3, 2, 4, 7, 6, 8

// Post-order traversal
console.log("Post-order traversal:");
myBinaryTree.postOrderTraversal(myBinaryTree.root, (data) => console.log(data)); // Outputs: 2, 4, 3, 6, 8, 7, 5
