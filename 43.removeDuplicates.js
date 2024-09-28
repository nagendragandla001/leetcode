class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeDuplicates(head) {
  if (!head || !head.next) return head;
  let current = head;

  while (current && current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const one = new ListNode(1);
const dupone = new ListNode(1);

const two = new ListNode(2);
const three = new ListNode(3);
const dupthree = new ListNode(3);

one.next = dupone;
dupone.next = two;
two.next = three;
three.next = dupthree;

let head = one;

const result = removeDuplicates(head);

console.log(result);
