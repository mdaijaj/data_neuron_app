import React, { useEffect, useState } from "react";
import { ResizeConsumer } from "react-resize-context";
import "./story.css";
import { useNavigate, useParams } from "react-router";

const TextModel = () => {
  const [userdata, setUserdata]= useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams() 
  const navigate= useNavigate();

  let name, value;
  const handleInputs = (e) => {
    setUserdata({...userdata,
      firstname: e.target.value,
      lastname: e.target.value,
      mobile: e.target.value,
      email:e.target.value} )
  };


  const preFilContent= async ()=>{
    console.log("userId", id)

    const response= await fetch(`/api/content_details/${id}`)
        const postData= await response.json();
        console.log("postData", postData)
        const result=postData.data
        console.log("result", result)
        let finaldata = (result) ? setUserdata(result) : setLoading(false);
  }





  const postStory = async (e) => {

    console.log("userdata", userdata)
    e.preventDefault();
    const response = await fetch(`/api/uploadContent/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON. stringify({
        email:userdata.email,
         firstname:userdata.firstname, 
         lastname:userdata.lastname, 
         mobile: userdata.mobile })
    });

    if (response.ok) {
      console.log('User data updated successfully!');
      navigate("/show_content")
    } else {
      console.error('Failed to update user data.');
    }
  };

  useEffect(()=>{
    preFilContent()
  }, [])


  return (
    <>
      <div className="flex-container">
        <ResizeConsumer className="flex-item-left">
          <form className="needs-validation" novalidate>
            <h1>Edit content</h1>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={userdata?.firstname}
                  onChange={(e)=> setUserdata({...userdata, firstname: e.target.value})}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  onChange={(e)=> setUserdata({...userdata, lastname: e.target.value})}
                  value={userdata?.lastname}
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
                  onChange={(e)=> setUserdata({...userdata, email: e.target.value})}
                  value={userdata?.email}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  onChange={(e)=> setUserdata({...userdata, mobile: e.target.value})}
                  value={userdata?.mobile}
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
                  onChange={(e)=> setUserdata({...userdata, title: e.target.value})}
                  value={userdata?.title}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="validationTooltip03">Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="time"
                  value={"time"}
                />
              </div>
              <input type="file" id="myFile" name="filename2"/>
              
            </div>
            <button
              className="btn btn-primary"
              onClick={postStory}
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

export default TextModel;
