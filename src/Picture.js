import React from 'react'
import { Link } from "react-router-dom";

const imgstyle={
    height:"250px",
    width:"250px"
}

export default function Picture() {
    return (
        <>
            <div className="flex-container">
            <div>
            {" "}
            <Link to="/Sports">
                <img src="https://cdn2.iconfinder.com/data/icons/gaming-flat-1/58/010_-_Sports_Games-512.png" alt="sports" style={imgstyle} /><br /><h4>Sports And Games</h4>
            </Link>
            </div>

            <div><a href="https://www.google.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFS6KS6sZ8_fWPE5UE6siXXVRggJGga-fh06juvjM8n2zSgDl2EBjqkLKRkjChUF_jpc&usqp=CAU" alt="cultural" style={imgstyle} /><br /><h4>Social And Cultural</h4></a></div>

            <div><a href="https://www.google.com/"><img src="https://media.giphy.com/media/f6zQxXIHb0hckdeMl7/giphy.gif" alt="cultural" style={imgstyle} /><br /><h4>Student's Welfare</h4></a></div>

            <div><a href="https://www.google.com/"><img src="https://media.istockphoto.com/vectors/digital-technology-and-engineering-digital-telecoms-concept-vector-vector-id1166372378?b=1&k=20&m=1166372378&s=612x612&w=0&h=y7tDUBs3JXcfujIxMlIp2tRep-j7u4N4yd8CMqN9VFw=" alt="cultural" style={imgstyle} /><br /><h4>Technology</h4></a></div>

            <div><a href="https://www.google.com/"><img src="https://e7.pngegg.com/pngimages/1017/470/png-clipart-three-man-holding-trophy-illustration-computer-icons-scalable-graphics-library-icon-winner-miscellaneous-text-thumbnail.png" alt="cultural" style={imgstyle} /><br /><h4>Results</h4></a></div>
            </div>
        </>
    )
}
