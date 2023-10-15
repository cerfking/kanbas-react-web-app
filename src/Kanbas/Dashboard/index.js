import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
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
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;