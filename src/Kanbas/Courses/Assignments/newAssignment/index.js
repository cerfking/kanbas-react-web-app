import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "../assignmentsReducer";

import 'bootstrap/dist/css/bootstrap.min.css';
import {addModule, setModule} from "../../Modules/modulesReducer";
import {createAssignment} from "../client";
import {createModule} from "../../Modules/client";

function NewAssignment() {
    const { assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSave = () => {
        createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
        //dispatch(addAssignment({ ...assignment, course: courseId }))
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2"
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))
                   }/>

            <input value={assignment.description}
                   className="form-control mb-2"
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
                   }/>
            <label htmlFor="due">Due</label>
            <input value={assignment.due}
                   className="form-control" type="date"
                   id={"due"}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, due: e.target.value }) )}/>
            <label htmlFor="availableFrom">Available From</label>
            <input value={assignment.availableFrom}
                   className="form-control" type="date"
                   id={"availableFrom"}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFrom: e.target.value }) )}/>
            <label htmlFor="until">Until</label>
            <input value={assignment.until}
                   className="form-control" type="date"
                   id={"until"}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, until: e.target.value }) )}/>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger">
                Cancel
            </Link>

            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
        </div>
    );
}


export default NewAssignment;