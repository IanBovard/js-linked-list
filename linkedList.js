/*jshint esversion:6*/
/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){
  let linkedList = null;

  function getHead(){
    return linkedList;
  }
  function getTail(){
    let currentNode = linkedList;
    if (currentNode !== null){
      while (currentNode.next){
        currentNode = currentNode.next;
      }
      return currentNode;
    }else{
      return null;
    }
  }
  function add(value){
    let tail = getTail();
    let currentNode = linkedList;
    if (tail === null){
      linkedList  = {
        value : value,
        next : null
      };
      return linkedList;
    }else{
     tail.next = {
      value : value,
      next : null
    };
  }
  return tail.next;
}

function get(number){
 let currentNode = linkedList;
 let count  = 0;
 if (count === number){
  return currentNode;
}else if (number < 0){
  return false;
}else{
  while (count < number){
    if (currentNode.next !== null){
      currentNode = currentNode.next;
      count++;
    }else{
      return false;
    }
  }
  return currentNode;
}
}
function remove(number){
  let count = 0;
  let currentNode = linkedList;
  let previousNode = linkedList;

  if (number === 0){
    linkedList = linkedList.next;
  }else if (number < 0){
    return false;
  }else{
    while (count < number){
      if (currentNode.next){
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }else{
        return false;
      }
    }
    previousNode.next = currentNode.next;
    return currentNode;
  }
}
function insert(value, number){
  let previousNode = get(number-1);
  let currentNode = get(number);
  let nextNode = get(number+1);
  let newNode = {
    value :value,
    next : null
  };
  if (number === 0){
    newNode.next = getHead();
    linkedList = newNode;
    return linkedList;
  }else if (currentNode.next === null){
    newNode.next = currentNode;
    previousNode.next = newNode;
  }else if (currentNode){
    newNode.next = currentNode;
    currentNode.next = nextNode;
    previousNode.next = newNode;
  }else{
    return false;
  }
  return newNode;
}
return {
  getHead : getHead,
  getTail : getTail,
  add : add,
  get : get,
  remove : remove,
  insert : insert
};
}
let test = linkedListGenerator();
console.log("add: ",test.add('cat'));
console.log("add: ",test.add('dog'));
console.log("add: ",test.add('fish'));
console.log("get: ",test.get(0).value);
console.log("insert", test.insert('shiba inu', 0));
console.log("insert get: ", test.get(0).value);