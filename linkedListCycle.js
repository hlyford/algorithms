// You have a singly-linked list ↴ and want to check if it contains a cycle.
// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.data—the data held in the node. For example, if our linked list stores people in 
// line at the movies, node.data might be the person's name.
// For example:

  function LinkedListNode(value) {
  	var obj = {};
    obj.value = value;
    obj.next = null;

    return obj;
}

// A cycle occurs when a node’s next points back to a previous node in the list. 
// The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

// Write a function containsCycle() that takes the first node in a singly-linked list 

// and returns a boolean indicating whether the list contains a cycle.

function containsCycle (firstNode) {
	var fastValue = firstNode, slowValue = firstNode;


	var step = function (fast, slow, count) {		
		// if you reach the end of the cycle
		if (fast.next === null || fast.next === undefined) {
			return false;
		} else {			
			// step then see if equal					
			fast = fast.next.next, slow = slow.next;
			if (fast === slow) {
				return true;
			} else {
				return step(fast, slow);
			}
		}		
	}	
	return step(fastValue, slowValue);
}

// TEST
var node1 = LinkedListNode(5);
var node2 = LinkedListNode(6);
var node3 = LinkedListNode(7);
var node4 = LinkedListNode(8);
var node5 = LinkedListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;


console.log(containsCycle(node1));
