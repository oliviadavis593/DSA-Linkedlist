
//Node class
class _Node {
    constructor() {
        this.value = value; 
        this.next = next; //pointer 
    }
}

/* #1: Create a LL class w. its core functions */
class LinkedList {
    constructor() {
        this.head = null; //if the head null === list is empty 
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head) //new node - item inside - is the first node in the list
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let lastNode = this.head; 
            while (lastNode.next !== null) { //indicates that we're at the end of the list
                lastNode = lastNode.next;
            } 
            lastNode.next = new _Node(item, null); //insert the new node & point it to null
        }
    }

    find(item) {
        //worst case = O(n)
        let currNode = this.head; //start at the head of list

        if (!this.head) {
            return null; 
        }
        while (currNode.value !== item) { 
            if (currNode.next === null) { //nothing else to lookup (reached end of list)
                return null; 
            }
            else {
                currNode = currNode.next; //otherwise, keep looking
            }
        }
        return currNode; 
    }

    removal(item) {
        if (!this.head) {
            return null; 
        }
        if (this.head.value === item) {
            this.head = this.head.next;  //make the next node the head
            return;
        }
        let currNode = this.head; 
        let previousNode = this.head; 
        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode; 
            currNode = currNode.next; 
        }
        if (currNode === null) {
            //we've reached the end of our LL with no value mathed w. item
            console.log('Item not found')
            return; 
        }
        previousNode.next = currNode.next; 
    }
}

/* #2: Create a singly LL */
class _Main {
    constructor() {
        this.value = value; 
        this.next = next; 
    }
}

class SLL {
    constructor() {
        this.head = null; 
    }

    insertApolloFirst(item) {
        this.head = new _Main(item, this.head);
    }

    insertBoomerLast(item) {
        if (this.head === null) {
            return this.insertApolloFirst(item)
        }
        else {
            let tempNode = this.head; 
            while (tempNode.next !== next) {
                tempNpde = tempNode.next;
            }
            tempNode.next = new _Main(item, null);
        }
    }

    getAt(index) {
        let counter = 0; 
        let node = this.head; 
        while(node) {
            if (counter === index) {
                return node; 
            }
            counter++; 
            node = node.next; 
        }
        return null; 
    }

    insertAt(item, index) {
        if (!this.head) {
            return null; 
        }
        if (index === 0) {
            this.head = new _Main(item, this.head);
        }
        else {
            const previous = this.getAt(index - 1);
            let newNode = new _Main(item);
            newNode.next = previous.next; 
            previous.next = newNode; 
            return this.head; 
        }
    }

}

/*
 */