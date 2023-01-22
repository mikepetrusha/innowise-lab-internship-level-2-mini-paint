import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "../../api/firebase.config";
import { useAuth } from "../../contexts/AuthContext";
import { addPost } from "../../utils/FetchPost";
import Header from "../../components/Header/Header";
import Canvas from "../../components/Canvas/Canvas";
import Tools from "../../components/Tools/Tools";
import { useAppDispatch } from "../../hooks/reduxHooks";
import "./Editor.css";

const Editor: FC = () => {
  const { currentUserEmail } = useAuth();
  const [color, setColor] = useState<string>("#000");
  const [width, setWidth] = useState<string>("5");
  const [tool, setTool] = useState<string>("pen");
  const dispatch = useAppDispatch();

  const uploadPic = (pic: any) => {
    const id = uuidv4();
    const storageRef = ref(storage, `pics/${id}`);
    const uploadTask = uploadString(storageRef, pic, "base64", {
      contentType: "image/png",
    });
    uploadTask.then((uploadResult) => {
      getDownloadURL(uploadResult.ref).then((downloadURL) => {
        dispatch(
          addPost({
            id,
            email: currentUserEmail || "",
            path: downloadURL,
            date: Date.now(),
          }),
        );
        toast.success("Uploaded!");
      });
    });
  };

  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <div className="wrapper">
        <h2>Editor</h2>
        <div className="editor-container">
          <Tools
            color={color}
            width={width}
            setColor={setColor}
            setWidth={setWidth}
            setTool={setTool}
          />
          <h4 className="tool-title">
            <strong>Active tool:</strong>
            {tool}
          </h4>
          <Canvas
            width={width}
            color={color}
            tool={tool}
            uploadPic={uploadPic}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
