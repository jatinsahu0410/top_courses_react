import React from "react";

const Filter = ({ filterData, setCategory, category }) => {
    // let category = props.category;
    // let setCategory = props.setCategory;
    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div className="w-11/12 max-w-max flex flex-wrap space-x-4 gap-y-4 mx-auto py-4 justify-center align-baseline">

            {
                filterData.map( (data) => (
                    <button className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 hover:border-white border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-80 border-white" : "bg-opacity-40 border-transparent"} `}key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
                ))
            }

        </div>
    );
}

export default Filter;