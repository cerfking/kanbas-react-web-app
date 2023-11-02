import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import assignmentsReducer from "./assignmentsReducer";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "./assignmentsReducer";
function Assignments() {
    const { courseId } = useParams();
    //const assignments = db.assignments;
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <button className={"btn btn-danger"} onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`)}>+ Assignment</button>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;