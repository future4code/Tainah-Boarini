//Faça a implementação de uma Lista Ligada em *Typescript*. Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela.

export { } // para de reclamar

class ListNode {
    constructor(
        public value: any,
        public nextElement: ListNode | null = null
    ) { }
}

//lista de nós 

// const element1: ListNode = new ListNode("element1")
// const element2: ListNode = new ListNode("element2", element1)

// console.log(JSON.stringify(element2, null, 2));

//adiciona um elemento ao final da lista (TIPO UM PUSH)

class LinkedList {
    constructor(
        public start: ListNode | null = null
    ) { }

    public addToTail = (value: any): void => {
        if (!this.start) {
            this.start = new ListNode(value)
        }
        else { //caso seja nulo:

            let current = this.start

            while (current.nextElement) { //enquanto o current for o proximo elemento:
                current = current.nextElement
            }

            current.nextElement = new ListNode(value)
        }

    }
}

const addElement: LinkedList = new LinkedList()

addElement.addToTail("Element1")
addElement.addToTail("Element2")
addElement.addToTail("Element3")

console.log(JSON.stringify(LinkedList))

