const colors = require('colors');


class Node {
    /* IMPLEMENT ME */
}

class list {
    /* IMPLEMENT ME */
}




// ***********
//  EXAMPLE 1
// ***********

/*
class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next
    }
}

let tempnode = new Node();
console.log('NEW NODE: ', tempnode);

class list {
    constructor(head = null, length = 0) {
        this.head = head;
        this.length = length;
    }

    insert(nodeVal) {
        const node = new Node(nodeVal);
        try{
            if(this.head === null){
                this.head = node;
                this.length = this.length+1;
                return !!(0);
            }
            let mark = this.head;
            while(mark.next !== null) {
                mark = mark.next;
            }
            mark.next = node;
            this.length = this.length+1;

            return !!(0);
        }
        catch(er) {
            console.log(er);
            return !!(1);
        }
    }

    show() {
        let mark = this.head;
        while(mark !== null) {
            console.log(mark.value);
            mark = mark.next;
        }
    }

    size() {
        return this.length;
    }

    findMiddle() {
        let leadingPtr = this.head;
        let trailingPtr = this.head;

        while(leadingPtr !== null){
            leadingPtr = leadingPtr.next;
            leadingPtr = leadingPtr ? leadingPtr.next : null;

            trailingPtr = trailingPtr.next;
        }

        return trailingPtr.value;
    }

    update(val, replacementVal) {
        let ptr = this.head;
        while(ptr !== null) {
            if(ptr.value === val){
                ptr.value = replacementVal;
                return;
            }
            ptr = ptr.next;
        }
        console.log('that value doesnt exist');
    }

    remove(val) {
        if(this.head === null){
            return;
        }

        if(this.head.value === val){
            this.head = this.head.next;
            this.length = this.length-1;
            return;
        }
            
        let leadingPtr = this.head.next;
        let trailingPtr = this.head;
        while(leadingPtr !== null){
            if(leadingPtr.value === val){
                trailingPtr.next = leadingPtr.next;
                this.length = this.length-1;
                return;
            }
            trailingPtr = leadingPtr;
            leadingPtr = leadingPtr.next;
        }
    }

}
*/














// ***********
//  EXAMPLE 2
// ***********

/*
let list = function (e) {
  const self = this;

  let first;
  let last;
  let head;

  self.insert = (value) => {
    const node = new Node(value);

    if (first == null) {
      first = last = node;
    } else {
      let head = first;

      while (head.next != null) {
        head = head.next;
      }

      head.next = node;
      last = head.next;
    }
  };

  self.show = () => {
    let head = first;

    while (head != null) {
      console.log(head.value);
      head = head.next;
    }
  };

  self.remove = (value) => {
    let found = false;
    let head = first;

    while (head != null) {
      if (first.value == value) {
        prev = head = first = first.next;

        found = true;
      } else {
        if (head.value == value) {
          found = true;

          prev.next = head.next;
        }

        prev = head;
        head = head.next;
      }
    }

    if (!found) {
      console.log(`#${value} not found`);
    }
  };

  self.update = (value, newValue) => {
    let head = first;

    while (head != null) {
      if (head.value == value) {
        head.value = newValue;
      }

      head = head.next;
    }
  };

  self.size = () => {
    let head = first;
    let i = 0;

    while (head != null) {
      i++;
      head = head.next;
    }

    console.log(i);
  };

  self.findMiddle = () => {
    let head = first;
    let slowPointer = head;
    let fastPointer = head;

    while (
      fastPointer.next !== undefined &&
      fastPointer.next.next !== undefined
    ) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }

    console.log(slowPointer.value);
  };

  let Node = function (value) {
    this.value = value;

    const next = {};
  };

  return self;
};
*/





//create a new instance of the list object
let exampleList = new list();


try {
    //add new elements in the list
    exampleList.insert(1);
    exampleList.insert(2);
    exampleList.insert(3);
    exampleList.insert(4);
    exampleList.insert(5);
    exampleList.insert(6);
    exampleList.insert(7);
    exampleList.insert(8);
    exampleList.insert(9);
    //show the list with the new elements in the list
    console.log(colors.green('----> show the list with the new elements in the list'));
    exampleList.show();

    //show the size in the list
    console.log(colors.green('----> show the size in the list'));
    exampleList.size();

    //show the size in the list
    console.log(colors.green('----> find the middle of the linked list'));
    exampleList.findMiddle();

    //updated the second element and make it 5
    exampleList.update(2, 5);
    //show the list with updated element
    console.log(colors.green('----> show the list with updated element'));
    exampleList.show();

    //remove the 3 element in the list
    exampleList.remove(3);
    //show the list without the removed element
    console.log(colors.green('----> show the list without the removed element'));
    exampleList.show();
}
catch (er) {
    console.log(colors.red('***** DID NOT PASS TESTS *****'));
    console.log(colors.red('error: \n', er));
}