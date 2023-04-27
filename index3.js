class Node3 {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}
class Linkedlist3 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    add3(val) {
        let node = new Node3(val)

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail = node;
            this.head.next = node
        }
        this.length++
            return this

    }
    remove() {
        if (!this.head) {
            return undefined
        } else {
            let Tail1 = this.tail
            let newTail = Tail1
            while (Tail1.next) {
                this.tail = newTail
                this.tail.next = null
            }
            this.length--;
            return Tail1
        }
    }
}

let linkedList3 = new Linkedlist3()
console.log(linkedList3.add3(10))
console.log(linkedList3.add3({ age: 23 }))
console.log(linkedList3.add3(90))
console.log(linkedList3.add3(89))
console.log(linkedList3.add3(88))
console.log(linkedList3.add3(20))
console.log(linkedList3.add3(["jjd", 23, 90, "koeo"]))
console.log('')
console.log(linkedList3.length)



console.log('')
console.log(linkedList3.remove())
console.log(linkedList3.length)