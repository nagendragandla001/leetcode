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

one.next = two;
two.next = three;
three.next = four;

let head = one;

function pairLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = head.next;
  let prev = null;

  while (head && head.next) {
    if (prev) {
      prev.next = head.next;
    }
    prev = head;

    let nextNode = head.next.next;
    head.next.next = head;
    head.next = nextNode;
    head = nextNode;
  }

  return dummy;
}

const result = pairLinkedList(head);
console.log(result);
