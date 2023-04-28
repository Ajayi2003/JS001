class Node11 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist11 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node11(value)

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
let linkedlist11 = new Linkedlist11()
console.log(linkedlist11.add(3))
console.log(linkedlist11.add(6))
console.log(linkedlist11.add(10))
console.log(linkedlist11.add(30))
console.log(linkedlist11.add([1, 2, 4]))
console.log(linkedlist11.add({ name: "Segun" }))
console.log("")
console.log(linkedlist11.length)



console.log("")
console.log(linkedlist11.remove())
console.log(linkedlist11.length)