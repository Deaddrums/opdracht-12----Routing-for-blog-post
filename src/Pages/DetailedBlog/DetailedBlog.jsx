import './DetailedBlog.css'
import {Link, useParams} from "react-router-dom";
import data from "../../constants/data.json"
import DateFormatter from "../../Helpers/DateFormatter/DateFormatter.jsx";

function DetailedBlog() {
    const {id} = useParams();

    const blog = data.find(item => item.id === Number(id))

    if (!blog) {
        return <>
            <div className="errorWrapper">
                <div className="errorContainer">
                    <h2>
                        These aren't the blogs you're looking for
                    </h2>
                    <h2>
                        <Link to="/"> Ga terug naar home</Link>
                    </h2>
                </div>
            </div>
        </>
    }

    return <>
        <div className="blogWrapper">
            <div className="blogContainer">
            <h1>{blog.title}</h1>
            <h2>
                <i>
                    {"Geschreven door " + blog.author + " op " + DateFormatter(blog.created)}
                </i>
            </h2>
            <p>
                {blog.content}
            </p>
            <p>
                {blog.comments + " reacties - " + blog.shares + " keer gedeeld."}
            </p>
            <h3>
                <Link to="/alle-posts">Ga terug naar het blog overzicht</Link>
            </h3>
            </div>
        </div>
    </>

}

export default DetailedBlog