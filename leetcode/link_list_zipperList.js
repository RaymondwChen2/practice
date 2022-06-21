class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

let x = new Node('x');
let y = new Node('y');
let z = new Node('z');

x.next = y;
y.next = z;

let zipperList = (head1, head2) => {
    let tail = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    let count = 0;

    while (curr1 !== null && curr2 !== null) {
        if (count % 2 === 0) {
            tail.next = curr2;
            curr2 = curr2.next;
        } else  {
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;

    return head1;
}

console.log(zipperList(a, x));