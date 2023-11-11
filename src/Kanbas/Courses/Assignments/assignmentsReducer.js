import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {title: "New title", description:"New description", due: "2023-01-10",availableFrom: "2023-01-01",until: "2023-01-12"},
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.assignments,
            ]
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            })
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    }
});

export const {addAssignment, deleteAssignment, updateAssignment, selectAssignment,setAssignments} = assignmentsSlice.actions;
export  default assignmentsSlice.reducer;
