import { useNavigate } from 'react-router';
import '../App.css';
import './story.css'
import React, { useState, useEffect } from 'react';
import { ResizeConsumer } from "react-resize-context";

const ShowContent=()=>{
    const [storyList, setStoryList]= useState([]);
    const navigate = useNavigate()

    const getStory=async()=>{
        const response= await fetch('/api/allContent')
        const postData= await response.json();
        const data=postData.data
        setStoryList([...data])
    }

    const getIdData= async (userId)=>{
        navigate(`/edit_content/${userId}`)
    }

    useEffect(() => {
        getStory()
    }, []);


    return(
        <>
        <h1>All Data List</h1>
        <ResizeConsumer className="flex-item">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">First_Name</th>
                    <th scope="col">Last_Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Title</th>
                    <th scope="col">Time</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {storyList?.map((elem,i)=>
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{elem.firstname}</td>
                    <td>{elem.lastname}</td>
                    <td>{elem.email}</td>
                    <td>{elem.mobile}</td>
                    <td>{elem.title}</td>
                    <td>{elem.time}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={()=>getIdData(elem._id)} ><i className="far fa-edit"></i></button>
                        <button class="btn btn-warning text-light" ></button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        </ResizeConsumer>
    </>
    )
}

export default ShowContent;