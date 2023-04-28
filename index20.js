class Node20 {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Linkedlist20 {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0

    }
    add(val) {
        let node = new Node20(val)
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
let linkedlist20 = new Linkedlist20()
console.log(linkedlist20.add(910))
console.log(linkedlist20.add(2000))
console.log(linkedlist20.add(90))
console.log(linkedlist20.add(89))
console.log(linkedlist20.add(88))
console.log(linkedlist20.add(20))
console.log(linkedlist20.add(["jjd"]))
console.log('')
console.log(linkedlist20.length)



console.log('')
console.log(linkedlist20.remove())
console.log(linkedlist20.length)