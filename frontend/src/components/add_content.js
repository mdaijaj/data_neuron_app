import React, { useState } from "react";
import { ResizeConsumer } from "react-resize-context";
import "./story.css";
import { useNavigate } from "react-router";


const AddContent = () => {
  const [story, setStory] = useState({
    firstname: "",
    lastname: "",
    email: "",
    title: "",
    mobile: "",
    time: "",
  });
  const navigate= useNavigate();

  let name, value;
  const handleInputs = (e) => {
    const newData = { ...story };
    newData[e.target.id] = e.target.value;
    setStory(newData);
    console.log("newData", newData);
  };
  const currentTime = new Date();


  const postContent = async (e) => {
    e.preventDefault();
    console.log("story", story);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: story.email,
        title: story.title,
        mobile: story.mobile,
        firstname: story.firstname,
        lastname: story.lastname,
        time: currentTime,
      }),
    };
    const res = await fetch("/api/addContent", config);
    console.log("res", res);
    if (res.status === 400 || !res) {
      window.alert("Invalid Registration");
    } else {
      window.alert("content add is successfully!");
      navigate('/show_content')
    }
  };


  return (
    <>
      <div className="flex-container">
        <ResizeConsumer className="flex-item-left">
          <form className="needs-validation" novalidate>
            <h1>add content</h1>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="time"
                  value={currentTime}
                />
              </div>
              <input type="file" id="myFile" name="filename2"/>
              
            </div>
            <button
              className="btn btn-primary"
              onClick={postContent}
              type="submit"
            >
              Submit form
            </button>
          </form>
        </ResizeConsumer>
      </div>
    </>
  );
};

export default AddContent;
