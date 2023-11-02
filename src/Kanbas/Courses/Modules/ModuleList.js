import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    // const modules = db.modules;
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className={"btn btn-primary"} onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <button className={"btn btn-success"}  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>


                <input className={"form-control"} value={module.name}
                       onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                       }
                />
                <textarea className={"form-control"} value={module.description}
                          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                          }
                />
            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <button
                                className={"btn btn-success"}
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>

                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;