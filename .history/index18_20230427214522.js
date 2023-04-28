class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist2 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node2(value)

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
            let Tail = this.tail
            let newtail = Tail
            while (Tail.next) {
                this.tail = newtail;
                this.tail.next = null
            }
            this.length--
                return Tail
        }

    }
}
let linkedList2 = new Linkedlist2()
console.log(linkedList2.add(3))
console.log(linkedList2.add(6))
console.log(linkedList2.add(10))
console.log(linkedList2.add(30))
console.log(linkedList2.add([1, 2, 4]))
console.log(linkedList2.add({ name: "Segun" }))
console.log("")
console.log(linkedList2.length)



console.log("")
console.log(linkedList2.remove())
console.log(linkedList2.length)