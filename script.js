class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  generateHTML(node) {
    if (node === null) {
      return `<div class="empty-node"></div>`;
    }

    const html = `
      <div class="node">
        <span class="value">${node.value}</span>
        <div class="children">
          ${this.generateHTML(node.left)}
          ${this.generateHTML(node.right)}
        </div>
      </div>
    `;

    return html;
  }
}

const generateBtn = document.getElementById("generate-btn");
const treeContainer = document.getElementById("tree-container");

generateBtn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const numbers = input.split(",").map(num => parseInt(num.trim()));
  const bst = new BST();

  for (let num of numbers) {
    bst.insert(num);
  }

  treeContainer.innerHTML = bst.generateHTML(bst.root);
});