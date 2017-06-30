var graph = {};

//console.log("Empty Graph",graph);

graph.addNode = function addNode(node){
  this[node] = {neighbors: [], data: undefined};
}

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

//console.log(graph);

graph.removeNode = function removeNode(node){
  delete this [node];

}

graph.removeNode("C");
//console.log(graph);

graph.setData = function setData(node,dataIn){
  this[node].data = dataIn;
}
graph.setData("A",7);
graph.setData("B",8);
//console.log(graph);



graph.addNeighbors = function addNeighbors(node, neighbor) {
  this[node].neighbors.push(neighbor);

}
graph.addNeighbors("A", "Wilsons");
graph.addNeighbors("B", "Billy");
//this is to add neighbors
console.log(graph);
