import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {
  const [courses, setCourses] = useState(null);
  // loading spinner
  const [loading, setLoading] = useState(true);
  // to apply filter 
  const[category, setCategory] = useState(filterData[0].title);

  const fetchDate = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save the data in an variable
      // console.log(data);
      setCourses(output.data);
      console.log("printing the valuen from courses");
      console.log(courses)
    } catch (error) {
      toast.error("something went wrong");
      
    }
    setLoading(false);
  }


  useEffect(() => {
    fetchDate();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2 flex-1 ">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        {/* loading icon or cards aak time pe aak ki show hoga and it will depend upon the value of loading/spinner is it true or false */}
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
