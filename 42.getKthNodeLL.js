class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(3);
let four = new ListNode(4);
let five = new ListNode(5);
let six = new ListNode(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;

let head = one;

function getKthNodeFromEnd(head, k) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.val;
}

const result = getKthNodeFromEnd(head, 3); // 4
console.log(result);

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// * => * -> * -> s
// * => * -> * -> * -> 0 -> f
