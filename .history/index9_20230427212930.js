class Node9 {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}
class Linkedlist9 {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node9(value)
        if (!this.head) {
            this.head = node;
            this.tail = this.head

        } else {
            this.tail = node;
            this.tail.next = node
        }
        this.length++
            return this

    }
    remove() {
        if (!this.head) {
            return undefined
        } else {
            let head = this.head
            let newHead = head
            while (head.next) {
                this.head = newHead;
                this.tail.next = null;

            }
            this.lenght--;
            return head
        }

    }
}