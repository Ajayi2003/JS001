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

    add4(value) {
        let node = new Node4(value)
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
let linkedList4 = new Linkedlist4()
console.log(linkedList4.add4(10000))
console.log(linkedList4.add4({ height: 24 }))
console.log(linkedList4.add4(90))
console.log(linkedList4.add4(40))
console.log(linkedList4.add4(50))
console.log(linkedList4.add4(20))
console.log(linkedList4.add4(69))
console.log('')
console.log(linkedList4.length)



console.log('')
console.log(linkedList4.remove())
console.log(linkedList4.length)