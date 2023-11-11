import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule, setModules,
} from "./modulesReducer";
import {createModule, findModulesForCourse} from "./client";
import * as client from "./client";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };



    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);



    // const modules = db.modules;
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className={"btn btn-primary"} onClick={handleUpdateModule}>
                    Update
                </button>
                <button className={"btn btn-success"}  onClick={handleAddModule}>Add</button>


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
                                onClick={() =>  handleDeleteModule(module._id)}>
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