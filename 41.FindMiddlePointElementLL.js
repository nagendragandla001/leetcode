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

const getMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

const result = getMiddle(head);

console.log(result); // 3
