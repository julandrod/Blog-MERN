import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createPostApi } from "../store/postsSlice";
import { selectUserState } from "../store/userSlice";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase/firebase";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-background);
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  label {
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
  }

  input {
    font-size: 16px;
    padding: 15px;
  }

  textarea {
    font-size: 16px;
    padding: 15px;
  }

  select {
    width: 100px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  width: 100%;
  border-left: 1px solid var(--clr-primary-1);
  border-right: 1px solid var(--clr-primary-1);
  border-bottom: 1px solid var(--clr-primary-1);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  button {
    margin: 20px 0;
    width: 40%;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    border-radius: 50px;
    background-color: var(--clr-primary-1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    color: var(--text-color);
    border: none;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const WritePage = () => {
  const { userInfo } = useSelector(selectUserState);

  const [postInfo, setPostInfo] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = (e) => {
    const trimCategories = e.target.value.split(",").map((cat) => cat.trim());
    setCategories(trimCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const infoPost = {
            ...postInfo,
            categories,
            photo: downloadURL,
            userId: userInfo.info._id,
          };
          const token = userInfo.token;

          dispatch(createPostApi({ infoPost, token }));
        });
      }
    );
  };

  return (
    <Wrapper>
      <TitleContainer>
        <h1>Write a post</h1>
      </TitleContainer>
      <FormContainer>
        <form>
          <InputContainer>
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <label>Categories</label>
            <input
              name="categories"
              type="text"
              placeholder="categories"
              onChange={handleCategories}
            />
            <span>Enter your categories separated by commas</span>
          </InputContainer>
          <InputContainer>
            <label>Text</label>
            <textarea
              name="desc"
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Enter your post"
            ></textarea>
          </InputContainer>
          <InputContainer>
            <label>Post as featured</label>
            <select name="featured" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </InputContainer>
          <InputContainer>
            <label>Upload an image</label>
            <input
              style={{ padding: 0 }}
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </InputContainer>
          <ButtonContainer>
            <button type="submit" onClick={handleSubmit}>
              Publish
            </button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default WritePage;
