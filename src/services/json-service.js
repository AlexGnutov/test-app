const TreeBuilder = require('../models/tree-builder/tree-builder');

class JSONService {
  constructor(database) {
    this.db = database;
    this.tree = this.assembleTree();
  }

  assembleTree() {
    // Build tree using utilities
    const nodes = this.db.all().map((a) => a.id);
    const treeBuilder = new TreeBuilder(nodes, process.env.ARTICLES_PER_NODE);
    treeBuilder.buildSym();

    // Assign references to articles in db
    const tree = treeBuilder.getTree();
    for (const node in tree) {
      this.db.update(node, { references: tree[node] });
    }
    return tree;
  }

  getArticlesTree() {
    return this.tree;
  }

  getArticlesData() {
    return this.db.all();
  }

  getArticlesBriefData() {
    const entries = this.db.all().map((a) => [a.id, [a.title, a.author, a.language]]);
    return Object.fromEntries(entries);
  }

  getArticle(id) {
    return this.db.findById(id);
  }
}

module.exports = JSONService;
