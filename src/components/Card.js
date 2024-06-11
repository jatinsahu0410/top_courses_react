import React from "react";
import { FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
const Card = ({ course, likedCourses, setLiked}) => {
    // let likedCourses = props.likedCourses;
    // let setLiked = props.setLiked;
    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // it's already liked so we need to remove that from liked courses
            setLiked((previous) => previous.filter((cid) => (cid !== course.id)));
            toast.error("Like removed");
        }else{
            // No liked 
            if(likedCourses.length ===  0){
                setLiked([course.id])
            }else{
                // some course are already present 
                setLiked((previous) => [...previous, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="bg-bgDark bg-opacity-70 py-1 px-2 rounded-md w-[300px] overflow-hidden">
            <div className="relative ">
                <img src={course.image.url} alt="course"/>

                <div className="absolute w-[30px] h-[30px] bg-slate-50 rounded-full right-1 bottom-1 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.5rem"/>): (<FcLikePlaceholder fontSize="1.5rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">{
                    course.description.length > 100 ? (course.description.substr(0,100) + "...") : (course.description)
                }</p>
            </div>
        </div>
    );
}
export default Card;