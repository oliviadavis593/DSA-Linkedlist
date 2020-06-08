//Objective: Solve linked list problems, assess big O for each excercise

//Drill #1: Create a linked list 

class LinkedList {
    constructor() {
        //head indicates beginning of the list 
        //we starting with an empty list represented by null 
        this.head = null; 
    }

    insertFirst(item) {
        //create a new node at the beginning of the list 
        //point the head to that new node 
        this.head = new _Node(item, this.head)
    }

    insertBefore(value, item) {
        if (this.head === null) {
           console.log('list is empty')
           return; 
        }
        if (this.head.item === item) {
            this.insertFirst(item);
            return; 
        } 
        let currNode = this.head.next; 
        let prevNode = this.head; 
        while (currNode !== null) {
            if (currNode.item === value) {
                let newNode = new _Node(item);
                newNode.next = prevNode.next; 
                prevNode.next = newNode; 
                return; 
            }
            prevNode = currNode; 
            currNode = currNode.next; 
        }
        console.log('element is not in the linked list');
    } 

    insertAfter(value, item) {
        if (this.head === null) {
            console.log('list is empty')
            return; 
        }
        let currNode = this.head; 
        while (currNode !== null) {
            if (currNode.item === value) {
                let newNode = new _Node(item);
                newNode.next = currNode.next; 
                currNode.next = newNode;
                return; 
            }
            currNode = currNode.next; 
        }
        console.log('element is not in the linked list')
    }

    insertAtIndex(index, item) {
        let currNode = this.head; 
        for (let i = 1; i < index; i++) {
            if (currNode === null) {
                console.log('index not available')
                return; 
            }
            currNode = currNode.next; 
        }
        let newNode = new _Node(item);
        newNode.next = currNode.next; 
        curreNode.next = newNode; 
    }

    //Big O: 0(n) = worst case since we have to go through each item 
    insertLast(item) {
        //check if the list is empty
        if (this.head === null) {
        //insert new item as only item in the list if it is
            this.insertFirst(item);
        }
        else {
            //start at the begining of the list & move through list until you've reached the end
            let tempNode = this.head; 
            //if tempNode isn't equal to null => move down to the next node 
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            //new node is now at the end of list & pointing to null 
            tempNode.next = new _Node(item, null);
        }
    }

    //Best Case: O(1) => we find the item at the beginning of the list
    //Worst Case: O(n) => because it could be anywhere in the list if it isnt at the 1st node 
    find(item) {
        //start at the head 
        let currNode = this.head; 
        //if list is empty
        if (!this.head) {
            return null; 
        }
        //Check for the item 
        while (currNode.value !== item) {
            //return null if its the end of the list & item is not on the list
            if (currNode.next === null) {
                return null; 
            } 
            else {
                //otherwise, keep looking
                currNode = currNode.next; 
            }
        }
        //Once you've found it 
        return currNode; 
    }

  //Best case: O(1)
  //Average & Worst case: O(n) due to finding node that you want to remove  
    remove(item) {
        //if list is empty 
        if (!this.head) {
            return null; 
        }
        //if node to be removed is head - make next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return; 
        }
        //Start at the head 
        let currNode = this.head; 
        //keep track of previous 
        let previousNode = this.head; 

        while ((currNode !== null) && (curreNode.value !== item)) {
            //save previous node
            previousNode = currNode; 
            currNode = curreNode.next; 
        }
        if (currNode === null) {
            console.log('Item no found')
            return;
        }
        previousNode.next = curreNode.next; 
    }
}


//Drill #2: Create a singly list 

function main() {
    let SLL = new _LinkedList; 
    SLL.insertFirst('Apollo')
    SLL.insertAtIndex('Boomer')
    SLL.insertAtIndex('Helo')
    SLL.insertAtIndex('Husker')
    SLL.insertAtIndex('Starbuck')
    SLL.insertAtIndex('Tauhida')
    SLL.remove('Husker')
}