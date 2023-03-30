import { useState } from "react";
import { folderData } from "./folder/folder-data";
import Folder from "./components/folder";
import useTreeTraverse from "./hooks/useTreeTraverse";

function App() {
  const [explorer, setExplorer] = useState(folderData);
  const { insertNode } = useTreeTraverse();

  function handleTreeNode(parentId, name, isFolder) {
    console.log("Calling HandleTreeNode");
    const newTree = insertNode(explorer, parentId, name, isFolder);
    setExplorer(newTree);
  }
  console.log(explorer);
  return (
    <div className="app">
      <div className="file_explorer_container">
        {explorer.map((file) => (
          <Folder file={file} key={file.id} addNode={handleTreeNode} />
        ))}
      </div>
    </div>
  );
}

export default App;
