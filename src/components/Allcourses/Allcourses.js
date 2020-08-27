import React from 'react';
 import courseList from '../FakeData/FakeData.js'
import { useState } from 'react';
import Course from '../SingleCourse/Course.js';
import "./Allcourses.css"
import Cart from '../Cart/Cart.js';


const Allcourses = () => {

    const [courses, setCourses] = useState(courseList);

    const [cart, setCart] = useState([]);


    const purchaseCourse = (course) => {
        

        const newCart = [...cart, course];
        setCart(newCart);

        

    }

    
    return (
        <div className="Course-container d-flex justify-content-between">
            
            <div className=" row col-md-9  course-catalogue">
                {
                    courses.map(course =><Course key={course.id} course={course} purchaseCourse={purchaseCourse}  cart={cart}></Course> )
                }
            </div>

            <div className="col-md-3 cart-details">
                <Cart cart={cart}  ></Cart>
                 
            </div>

        </div>
        
        
        
    );
};


export default Allcourses;
