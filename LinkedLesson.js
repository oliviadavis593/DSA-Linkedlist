/* Implementation of genric node class  */
/* _(underscore):
1.private class that shouldn't be accessible to anyone
2.Can only be accessed by the Linked list class
 */
/*When a LL wants to create a new node
1. It creates an instance of the node class 
2. The node class's constructor accepts a variable (value) that holds data
3. Each node also has a next variable => serves as a pointer to the next node
 */
class _Node {
    constructor(value, next) {
      this.value = value;  
      this.next = next; //pointer 
    }
  }
  
   /* Operation in a linked list */
  //primary operations in a LL: insert, remove, get(find)
  //LL has a head (indicates start of list) - head always contains the 1st node
  class LinkedList {
    constructor() {
      this.head = null; //starting w. an empty list  
    }
  
    /*3 diff implementations of the insert operation in a list
    1. At the start of list (insertFirst)
    2. At the end of list (insertLast)
    3. Anywhere in the list - between 2 nodes (insert, insertAt)
     */
  
    //Inserting at the beginning  
    //Big O: O(1) => you're inserting at only place 1 (1st position) regardless of length
    insertFirst(item) {
      //create a node & point head to that new node
      this.head = new _Node(item, this.head);
    }
  
    //Inserting at the end (bit more complex)
    /*Steps:
    1. Create a new node item 
    2. Check to see if list is empty - then insert new item as the only item in the list 
    3. Start at beginning of list & move through list until you reach end of list 
    4. Set end node's next pointer to new node 
    5. New node's next pointer is null (indicating that new node now is the last node on the list)
     */
    //Big O: O(n) => requires iterating over all nodes individually in sequence until you reach the end 
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item)
      }
      else {
        let tempNode = this.head; 
        while (tempNode.next !== null) {
          tempNode = tempNode.next; 
        }
        tempNode.next = new _Node(item, null);
      }
    }
  
    /* Retrieval */
    /*Steps: 
    1. Traverse the list
    2. Compare the value sotred in each node w. the values you're searching for
    3. When items found - return the node 
     */
  
    find(item) {
      //start at the head (Start of list)
      let currNode = this.head; 
   
      //if the list is empty 
      if (!this.head) {
        return null; 
      }
      //check for the item
      while (currNode.value !== item) {
        //return null if its the end of the list & items isn't on the list
        if (currNode.next === null) {
          return null; 
        }
        else {
          //otherwise keep looking 
          currNode = currNode.next; 
        }
      }
      return currNode;
    }
  
    /* Removal */
    /*3 diff cases to consider
    1. Delete from the start of list 
    2. Delete from the end of list 
    3. Delete a node between 2 other nodes 
    */
    /*Big O
    Best case: 0(1)
    Average & Worst case: O(n) due to finding the node that you want to remove 
     */
    remove(item) {
      //if the list is empty 
      if (!this.head) {
        return null; 
      }
      //If the node to be removed is head = make next node head
      if (this.head.value === item) {
        this.head = this.head.next; 
        return; 
      }
      //Start at the head
      let currNode = this.head; 
      //Keep track of previous 
      let previousNode = this.head; 
  
      while((currNode !== null) && (currNode.value !== item)) {
        //Save the previous node 
        previousNode = currNode; 
        currNode = currNode.next; 
      }
      if (currNode === null) {
        console.log('Item not found')
        return; 
      }
      previousNode.next = currNode.next; 
    }
  }