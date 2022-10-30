const getRandomNode = (arr) => {
  const idx = Math.round(Math.random() * (arr.length - 1));
  return arr.splice(idx, 1)[0];
};

// asymmetrical - DEPRECATED
const addNodes = (arr, root, nodes, tree) => {
  const container = [];
  while (container.length < nodes && arr.length > 0) {
    container.push(getRandomNode(arr));
  }
  const node = {
    id: root,
    nodes: container,
  };
  tree.push(node);

  if (container.length > 0) {
    container.forEach((x) => {
      addNodes(arr, x, nodes, tree);
    });
  }
};

// symmetrical
const addNodesSym = (arr, row, maxNodes, tree) => {
  const nextRow = [];
  row.forEach((array) => {
    array.forEach((node) => {
      const nodes = [];
      while (nodes.length < maxNodes && arr.length > 0) {
        nodes.push(getRandomNode(arr));
      }
      // eslint-disable-next-line no-param-reassign
      tree[node] = nodes;
      nextRow.push(nodes);
    });
  });
  if (nextRow[nextRow.length - 1].length > 0) {
    addNodesSym(arr, nextRow, maxNodes, tree);
  }
};

module.exports = { getRandomNode, addNodes, addNodesSym };
