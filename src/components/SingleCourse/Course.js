import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Course.css'


const Course = (props) => {
    //console.log(props);
    const{courseTitle,students,instructor,price,img}=props.course
    
    return (
        
        <div class="col-md-4" >
            
                <div class="card " >
                 <img src={img} class="card-img img-fluid course-img" alt="..."></img>
                 <div class="card-body">
                        <h5 class="card-title">{courseTitle}</h5>
                        <p class="card-text">Enrolled Students Number:{students}</p>
                        <p class="card-text">Instructor:{instructor}</p>
                        <p class="card-text">Course Price:${price}</p>
                         <button className="btn btn-danger" onClick={()=>props.purchaseCourse(props.course)} ><FontAwesomeIcon icon={faShoppingBag} />Enroll Now</button>
                </div>
                </div>
                
            </div>
            
        
            
    );
};

export default Course;




// <div class="row no-gutters">
//                     <div class="col-md-4">
//                         <img src={img} class="card-img img-fluid course-img" alt="..."></img>
//                     </div>
//                     <div class="col-md-8">
//                         <div class="card-body">
//                             <h5 class="card-title">{courseTitle}</h5>
//                             <p class="card-text">Enrolled Students Number:{students}</p>
//                             <p class="card-text">Instructor:{instructor}</p>
//                             <p class="card-text">Course Price:${price}</p>
//                             <button className="btn btn-danger" onClick={()=>props.purchaseCourse(props.course)} ><FontAwesomeIcon icon={faShoppingBag} />Enroll Now</button>
//                         </div>
//                     </div>
//                 </div>