import { useState } from "react";

const Folder = ({ file, addNode }) => {
  const [expand, setExpand] = useState(false);
  const [addFiles, setAddFiles] = useState({ isFolder: null, show: false });

  const addDirectory = (e, isFolder) => {
    e.stopPropagation();
    setAddFiles({ isFolder, show: true });
  };
  const addDocuments = (e, isFolder) => {
    e.stopPropagation();
    setAddFiles({ isFolder, show: true });
  };

  const closeAddFile = () => {
    setAddFiles({ ...addFiles, show: false });
  };

  const onAddFiles = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log("Calling Add Files");
      console.log({ file });
      addNode(file.id, e.target.value, addFiles.isFolder);
      closeAddFile();
    }
  };

  return (
    <>
      <div className="folder_container" onClick={() => setExpand(!expand)}>
        <p style={{ display: "flex", alignItems: "center" }}>
          {file.isFolder && file.files.length > 0 ? (
            <img
              src={"/icons/arrow.svg"}
              className={`ui_icon_small ${expand && "rotate"}`}
            />
          ) : null}{" "}
          {file.isFolder ? "📁" : "📄"} {file.name}
        </p>
        {file.isFolder && (
          <span className="ui_options">
            <button
              className="ui_button"
              onClick={(e) => {
                addDocuments(e, false);
              }}
            >
              <img src={"/icons/add-file.svg"} className="ui_icon" />
            </button>
            <button
              className="ui_button"
              onClick={(e) => {
                addDirectory(e, true);
              }}
            >
              <img src={"/icons/add-folder.svg"} className="ui_icon" />
            </button>
          </span>
        )}
      </div>
      {addFiles.show && (
        <div className="file_form">
          {addFiles.isFolder ? "📁" : "📄"}
          <input
            type="text"
            onBlur={closeAddFile}
            autoFocus
            className="file_form_input"
            onKeyDown={onAddFiles}
          />
        </div>
      )}
      <div
        className="sub_folder"
        style={{ display: `${expand ? "block" : "none"}` }}
      >
        {file.isFolder &&
          file.files.map((sub) => (
            <Folder file={sub} key={sub.id} addNode={addNode} />
          ))}
      </div>
    </>
  );
};

export default Folder;
