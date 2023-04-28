class Node4 {
    constructor(value) {
        this.value = value;
        this.next.next;


    }
}
class Linkedlist4 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    add(value) {
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
    remove() {
        if (!this.head) {
            return undefined

        } else {
            let Tail = this.tail;
            let newTail = Tail
            while (newTail.next) {
                this.tail = newTail;
                this.tail.next = null;

            }
            this.length--;
            return newTail
        }

    }

}