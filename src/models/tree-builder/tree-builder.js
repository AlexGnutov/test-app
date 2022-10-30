const { getRandomNode, addNodes, addNodesSym } = require('./tree-functions');

class TreeBuilder {
  constructor(indexesList, maxNodes) {
    this.objects = indexesList;
    this.maxNodes = maxNodes;
    this.tree = {};
  }

  build() {
    const root = getRandomNode(this.objects);
    this.tree.root = root;
    addNodes(this.objects, root, this.maxNodes, this.tree);
  }

  buildSym() {
    const root = getRandomNode(this.objects);
    this.tree.root = root;
    addNodesSym(this.objects, [[root]], this.maxNodes, this.tree);
  }

  getTree() {
    return this.tree;
  }
}

module.exports = TreeBuilder;
