import React from 'react';
import {Link,withRouter} from 'react-router-dom';

function CourseDetail(props){
    console.log(props);
    console.log("Course Details ",props); 
       return(
    <div>
        <h1>Course Detail</h1>
        <h2>{props.match.params.courseId}</h2>
    </div>
    );

}
export default withRouter(CourseDetail);