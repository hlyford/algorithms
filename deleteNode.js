// Delete a node from a singly-linked list ↴ , given only a variable pointing to that node.
// The input could, for example, be the variable b below:

//   function LinkedListNode(value) {
//     this.value = value;
//     this.next = null;
// }

// var a = new LinkedListNode('A');
// var b = new LinkedListNode('B');
// var c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

// deleteNode(b);

// test case
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;
// end test case


function deleteNode (nodeToDelete) {
	// check if it's the last node
		// if so, just delete
	if (nodeToDelete.next === null) {
		nodeToDelete = null;
		return nodeToDelete;
	}
	var nextNode = nodeToDelete.next;
	nodeToDelete.value = nextNode.value, nodeToDelete.next = nextNode.next;

	return nodeToDelete;
}


deleteNode(c);
// console.log(a);

// goal: make it so the next value for a is c
	// argument node b only has knowledge of its next
	// we need to remember the next value for deleting node and assign it to the node before it

	// edge cases: first or last node




