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
linkedList.insert(3)
linkedList.insert(6)
linkedList.insert(10)
linkedList.insert(30)
linkedList.insert([1, 2, 4])
linkedList.insert({ name: "Segun" })
linkedList.insert("")
linkedList2.length()
linkedList.insert("")


linkedList.insert("")
linkedList.remove()
linkedList.length()