/*jshint esversion:6*/
/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){
  let list = null;

  function getHead(){
    return list;
  }
  function getTail(){
    let currentNode = list;
    if (currentNode){
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      return currentNode;
    }else{
      return null;
    }
  }
  function add(value){
    let newNode = {
      value : value,
      next : null
    };
    let currentNode = list;
    let tail = getTail();
    if (tail === null){
      list = newNode;
      return newNode;
    }else{
      currentNode.next = newNode;
      return currentNode.next;
    }
    return null;
  }
  function get(number){
    let currentNode = list;
    if (number === 0){
      return currentNode;
    }else if (number < 0){
      return false;
    }else if (typeof number === "string"){
      return false;
    }
    for (let i = 1; i <= number; i++){
      if (currentNode){
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    return currentNode;
  }
  function remove(number){

  }
  function insert(value, number){

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
let li = linkedListGenerator();
console.log("head",li.getHead());
console.log("tail",li.getTail());
console.log(li.add("dog"));
console.log(li.add("cat"));
console.log("one",li.get(1));
console.log("zero",li.get(0));
console.log("head",li.getHead());
console.log("tail",li.getTail());
console.log(li.insert("bird", 1));
console.log(li.remove(2));
console.log("tail",li.getTail());