class Node6 {
    constructor(value) {
        this.val = value;
        this.next = null

    }
}
class Linkedlist6 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(val) {
        let node = new Node6(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;

        } else {
            this.tail = node;
            this.tail.next = node;

        }
        this.length++;
        return this

    }
    remove() {

        if (!this.head) {
            return undefined
        } else {
            let Tail = this.head;
            let newTail = Tail;

            while (newTail.next) {
                this.head = newTail;
                this.tail.next = null;
            }
            this.length--
                return Tail
        }
    }
}
let linkedList6 = new Linkedlist6();
console.log(linkedList6.add(5));
console.log(linkedList6.add(3));

console.log(linkedList6.add([6, 8, 9]));
console.log(linkedList6.add(79));
console.log(linkedList6.add({ name: "Peter" }));
console.log(linkedList6.add(9));
console.log("");
console.log(linkedList6.length);
console.log(linkedList6.remove())
console.log("");
console.log(linkedList6.length);