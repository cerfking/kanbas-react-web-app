import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { React, useState } from "react";
function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {


    return (
        <div>
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>

            <button onClick={addNewCourse} >
                Add
            </button>
            <button onClick={updateCourse} >
                Update
            </button>


            <div className="d-flex flex-wrap">
                {courses.map((course) => (
                    <div key={course._id} style={{ marginRight: '30px' }}>
                        <Link to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none' }}>
                            <div className="card" style={{width: '260px'}}>
                                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310114057/web-development-image.png"
                                    className="card-img-top" alt="..." style={{width: '260px', height: '150px'}}
                                />
                                    <div className="card-body">
                                        <h4 className="card-title">{course.name}</h4>
                                        <h5 className="card-title">{course.number}</h5>
                                        <p className="card-text">202310_1 Fall 2023 Semester Full Term</p>
                                    </div>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>

                            </div>


                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;