"use strict";
//Faça a implementação de uma Lista Ligada em *Typescript*. Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela.
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    function ListNode(value, nextElement) {
        if (nextElement === void 0) { nextElement = null; }
        this.value = value;
        this.nextElement = nextElement;
    }
    return ListNode;
}());
//lista de nós 
var element1 = new ListNode("element1");
var element2 = new ListNode("element2", element1);
// console.log(JSON.stringify(element2, null, 2));
//adiciona um elemento ao final da lista (TIPO UM PUSH)
var LinkedList = /** @class */ (function () {
    function LinkedList(start) {
        var _this = this;
        if (start === void 0) { start = null; }
        this.start = start;
        this.addToTail = function (value) {
            if (!_this.start) {
                _this.start = new ListNode(value);
            }
            else { //caso seja nulo:
                var current = _this.start;
                while (current.nextElement) { //enquanto o current for o proximo elemento:
                    current = current.nextElement;
                }
                current.nextElement = new ListNode(value);
            }
        };
    }
    return LinkedList;
}());
var addElement = new LinkedList();
addElement.addToTail("Element1");
addElement.addToTail("Element2");
addElement.addToTail("Element3");
console.log(JSON.stringify(LinkedList));
