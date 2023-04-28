class Node5 {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Linkedlist5 {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    add(val) {
        let node = new Node5(val);
        if (!head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail = node;
            this.tail.next = node;
        }
        this.length++;
        return this;
    }
    remove() {
        if (!this.head) {
            return undefined;
        } else {
            let Tail = this.tail;
            let newTail = Tail;
            while (Tail.next) {
                this.tail = newTail;
                this.tail.next = null;
            }
            this.length--;
            return newTail;
        }
    }
}
let linkedList5 = new Linklist5();
console.log(linkedList5.add(34));
console.log(linkedList5.add(39));

console.log(linkedList5.add([6, 8, 9]));
console.log(linkedList5.add(79));
console.log(linkedList5.add([{ name: "Peter" }, { age: 20 }]));
console.log(linkedList5.add(9));
console.log("");
console.log(linkedList5.length);
linkedList5.remove();
console.log("");
console.log(linkedList5.length);