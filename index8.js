class Node8 {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Linkedlist8 {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0

    }
    add(val) {
        let node = new Node8(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head

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
            let Tail = this.head
            let newTAIl = Tail
            while (Tail.next) {
                this.head = newTAIl;
                this.tail.next = null
            }

            this.length--
                return Tail
        }
    }
}
let linkedList8 = new Linkedlist8()
console.log(linkedList8.add(910))
console.log(linkedList8.add(2000))
console.log(linkedList8.add(90))
console.log(linkedList8.add(89))
console.log(linkedList8.add(88))
console.log(linkedList8.add(20))
console.log(linkedList8.add(["jjd"]))
console.log('')
console.log(linkedList8.length)



console.log('')
console.log(linkedList8.remove())
console.log(linkedList8.length)