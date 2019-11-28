class Node {
  constructor(data) {
    this.data = data
  }
}

class Stack {
  constructor() {
    this.arr = []
  }

  addNode(node) {
    this.arr.push(node)
  }

  popNode() {
    this.arr.pop()
  }

  topNode() {
    return this.arr[arr.length - 1]
  }

  peekMax() {
    let values = this.arr.map(node => node.data)
    return Math.max(...values)
  }

  peekMin() {
    let values = this.arr.map(node => node.data)
    return Math.min(...value)
  }

  popMax() {
    let values = this.arr.map(node => node.data)
    let max = Math.max(...values)
    let index = this.arr.lastIndexOf(max)
    this.arr.splice(index, 1)
  }

  popMin() {
    let values = this.arr.map(node => node.data)
    let min = Math.min(...value)
    let index = this.arr.lastIndexOf(min)
    this.arr.splice(index, 1)
  }

  printStackFromTop() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log(this.arr[i].data)
    }
  }

  printStackFromBottom() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i].data)
    }
  }
}

let node1 = new Node(100)
let node2 = new Node(200)
let node3 = new Node(300)
let node4 = new Node(400)
let node5 = new Node(500)

let stack = new Stack
stack.addNode(node1)
stack.addNode(node2)
stack.addNode(node3)
stack.addNode(node4)
stack.addNode(node5)

stack.popNode()
stack.popMax()

stack.printStackFromTop()
