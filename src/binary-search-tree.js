const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const newN = new Node(data);

    if (!this.node) {
      this.node = newN;
    } else {
      this.addNode(this.node, newN);
    }
  }

  addNode(node, newN) {
    if (newN.data < node.data) {
      if (!node.left) {
        node.left = newN;
      } else {
        this.addNode(node.left, newN);
      }
    } else {
      if (!node.right) {
        node.right = newN;
      } else {
        this.addNode(node.right, newN);
      }
    }
  }

  has(data) {
    return !!this.findNode(this.node, data);
  }

  find(data) {
    return this.findNode(this.node, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      const temp = this.MinNode(node.right);
      node.data = temp.data;
      node.right = this.removeNode(node.right, temp.data);
      return node;
    }
  }

  MinNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.MinNode(node.left);
    }
  }

  min() {
    if (!this.node) {
      return null;
    }
    return this.MinNode(this.node).data;
  }

  max() {
    let node = this.node;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};