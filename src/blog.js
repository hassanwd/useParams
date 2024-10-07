import React from 'react'
import { useParams } from 'react-router-dom';

const Blog = () => {
        let params = useParams();

        const profiles = {
            "123" :{
                name:"Ahmad",
                age:"100"
            },
            "456":{
                name:"Hello",
                age:"200"
            }
        }
    console.log(params);
        return(

        <div style={{ fontSize: "50px" }}>
                 Now showing post from {profiles[params.id].name}
                </div>


        ) 
}

export default Blog