class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail = node;
            this.tail.next = node;
        }
        this.length++
            return this
    }

}
let linkedlist = new LinkedList()
console.log(linkedlist.insert(24))
console.log(linkedlist.insert(36))
console.log(linkedlist.insert(80))
console.log(linkedlist.insert(90))