
/*=============================================
=                Linked Lists                 =
=============================================*/

//making the node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    //for a double linked list
    // this.prev = null;
  }
}

//linked list class with constructor 
//** if head node is not passed then head will be given null */

class LinkedList {
  constructor(head = null) {
    this.head = head;
    //for double linked
    //this.tail = null;
  }
  //any manner of getting into the linked list you have to create
  //ie. size(), clear(), getLast(), getFirst(), insert(), delete()

  /* size => returns number of nodes*/
  size() {
    let count = 0;
    let node = this.head;
    while (node) { //this will keep going until the tail of which the next node will be null
      count++;
      node = node.next;
    }
    return count;
  }

  /* clear => empties the list */
  clear() {
    this.head = null;
  }

  /* getLast => returns the last node */
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next; //this it's at the end we need to keep going to until the moment we hit the a null as lastNode.next.
      }
      return lastNode;
    }
  }

  /* getFirst => returns the head */
  getFirst() {
    return this.head;
  }

  /* insert => this one will always insert on the beginning of the list*/
  insert(item) {
    if (!item) return; //checking item validity

    let node = new ListNode(item); //the param is being taken in by the constructor

    if (this.head) { //if it isn't the first item in the list assign the next to the head, thereby freeing up the head value
      node.next = this.head;
    }
    this.head = node;

    //============ if doubly linked ==========
    // if (head) {
    //  node.next = head;
    //  head.prev = node;
    //})
    // if (!tail) {
    // tail = node;
    //}
  }
  delete(value) {
    let current = this.head; //start at head

    //make sure the head isn't the value we're looking for
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    //go thru the list until you find the matching node
    while (current) {
      //is the next value the match
      if (current.next) {
        let next = current.next;
        if (next.value === value) {
          //remove it and update the pointer
          current.next = next.next;
          break;
        }
      }
      current = current.next;
    }
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);

node1.next = node2; //next is spontaneously created and assigned node2

//creating the linked list
let list = new LinkedList(node1); //we have given node1 to this.head. 

//will return 5
console.log(list.insert(705));

console.log(list.size(), "size");



