class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

const getNodeValue = (head, target) => {
    let curr = head; 
    let count = 0;

    while (curr !== null) {
        if (target === count) {
            return curr.val;
        }

        count += 1;
        curr = curr.next
    }

    return null;
}

console.log(getNodeValue(a, 7))