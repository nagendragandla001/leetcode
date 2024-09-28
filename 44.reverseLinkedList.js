class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

let head = one;

// 1 -> 2 -> 3 -> 4 -> 5

// 1 <- 2 <- 3 <- 4 <- 5 -> Head

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

const result = reverseLinkedList(head);
console.log(result);
