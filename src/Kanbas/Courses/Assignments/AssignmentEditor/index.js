import React, {useState} from "react";
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
import {updateModule} from "../../Modules/modulesReducer";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const thisAssignment = assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const handleDelete = () => {
        setShowDeleteDialog(true);
        // dispatch(deleteAssignment(assignment._id));
        // navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }
    const handleConfirmDelete = () => {
        dispatch(deleteAssignment(assignment._id));
        setShowDeleteDialog(false);
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const handleCancelDelete = () => {
        // Close the dialog
        setShowDeleteDialog(false);
    };

    dispatch(selectAssignment(thisAssignment));
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2"
                   onChange={(e) =>
                       dispatch(selectAssignment({ ...assignment, title: e.target.value }))
                   }/>

            <input value={assignment.description}
                   className="form-control mb-2"
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
                   }/>
            <label htmlFor="due">Due</label>
            <input value={assignment.due}
                   className="form-control" type="date"
                   id={"due"}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, due: e.target.value })) }/>
            <label htmlFor="availableFrom">Available From</label>
            <input value={assignment.availableFrom}
                   className="form-control" type="date"
                   id={"availableFrom"}
                   onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFrom: e.target.value })) }/>
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
            <button
                className="btn btn-danger"
                onClick={handleDelete}>
                Delete
            </button>
            {showDeleteDialog && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to remove this assignment?</p>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            )}
        </div>
    );
}


export default AssignmentEditor;