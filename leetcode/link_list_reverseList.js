class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');

a.next = b;
b.next = c;

let reverseList = (head) => {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next;
    }

    return prev;
}

console.log(reverseList(a));