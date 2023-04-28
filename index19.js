class Node7 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist7 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    add(value) {
        let node = new Node7(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;

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
            let Tail = this.tail;
            let newTail = Tail
            while (Tail.next) {
                this.head = newTail;
                this.tail.next = null

            }
            this.length--
                return Tail

        }
    }
}
let linkedList7 = new Linkedlist7();
console.log(linkedList7.add([30, 80, "80"]));
console.log(linkedList7.add(3));

console.log(linkedList7.add(90));
console.log(linkedList7.add(79));
console.log(linkedList7.add({ name: "Peter" }));
console.log(linkedList7.add(9));
console.log("");
console.log(linkedList7.length);
console.log(linkedList7.remove())
console.log("");
console.log(linkedList7.length);