// Write a function to find the 2nd largest element in a binary search tree ↴ .
// Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};


BinaryTreeNode.prototype.secondLargestFinder = function () {		
	// if there's a right node on the root, the correct item has to either be on right side or the root node
	if (this.right !== null) {
		// BASE CASE: if the right node has no children then it must be root node
		if (this.right.right === null && this.right.left === null) {
			return this.value;
		} else  {
			// else recurse into the right child
			return this.right.secondLargestFinder();			
		} 
	// if there's not right node, FIND THE LARGEST IN LEFT SUBTREE
	} else {
		return findLargest(this.left);
	}

	function findLargest (node) {		
		if (node.right === null) {
			return node.value;
		} else {
			return findLargest(node.right);
		}
	};

}



// TESTS
var tree = new BinaryTreeNode(5);
tree.insertLeft(2);
tree.insertRight(8);
tree.left.insertLeft(1);
tree.left.insertRight(3);
tree.right.insertLeft(7);
tree.right.insertRight(12);
//       5
//     /   \
//    2     8
//  /  \   / \
// 1   3  7  12
console.log(tree.secondLargestFinder()); // 8
