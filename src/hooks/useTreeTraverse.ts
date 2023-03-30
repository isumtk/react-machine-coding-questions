const useTreeTraverse = () => {
  function insertNode(tree, parentId, name, isFolder) {
    console.log("Calling inertNode", tree);
    console.log({ parentId, name, isFolder });
    console.log(tree.id);

    // const latestTree = tree.map((elem) => {
    //   if (elem.id === parentId && elem.isFolder) {
    //     console.log("Calling Change Tree");
    //     elem.files.unshift({
    //       id: new Date().getTime(),
    //       name,
    //       isFolder,
    //       files: [],
    //     });
    //     return elem;
    //   } else {
    //     let newSubTree = elem.files.map((file) => {
    //       if (elem.isFolder) {
    //         return insertNode(file, parentId, name, isFolder);
    //       }
    //     });

    //     return { ...elem, newSubTree };
    //   }
    // });

    // return latestTree;
  }

  return { insertNode };
};

export default useTreeTraverse;
