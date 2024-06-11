import React, { useState } from "react";
import Card from "./Card";
// import { Toast, ToastContainer } from "react-toastify";
const Cards = ({ courses, category }) => {

    // track of liked courses
    // IN starting non of the courses is liked
    const [likedCourses, setLiked] = useState([]);
    // return all the course in a single array 
    console.log("Printing the value in courses")
    console.log(courses);
    function getCourses() {
        // jab default ya all pe hoga tab hi sara ka sara data pass hoga
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else{
            // only specific category ka array pass hoga
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLiked={setLiked} />
                ))
            }
        </div>
    );
};

export default Cards;