import './DetailedBlog.css'
import {Link, useParams} from "react-router-dom";
import data from "../../constants/data.json"
import DateFormatter from "../../Helpers/DateFormatter/DateFormatter.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function DetailedBlog() {
    const {id} = useParams();
    const blog = data.find(item => item.id === Number(id))
    const [post, setPost] = useState([])
    const [error, toggleError] = useState(false)

    useEffect(() => {
        async function fetchPost() {
            toggleError(false)
            try {
                console.log(id)
                const result = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                    headers: {
                        'novi-education-project-id': "6dc266a5-f7e7-48b9-b611-ba16d2a28f65"
                    }
                })
                // console.log(result.data)
                setPost(result.data)
            } catch (e) {
                console.error(e)
                toggleError(true)
            }

        }

        fetchPost();
    }, []);

    if (!blog) {
        return <>
            <div className="errorWrapper">
                <div className="errorContainer">
                    <h2>
                        These arent the blogs you're looking for
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


                    <div key={post.id}>

                    <h1>
                        {post.title}
                    </h1>
                    <h2>
                    <i>{"Geschreven door " + post.author + " op " + DateFormatter(post.created)}</i>
                    </h2>
                        <p>
                            {post.content}
                        </p>
                        <p>
                            {post.comments + " reacties - " + post.shares + " keer gedeeld."}
                        </p>
                        <h3>
                            <Link to="/alle-posts">Ga terug naar het blog overzicht</Link>
                        </h3>
                    </div>

                {error && (<p>Oops! Foutje! Kan gebeuren baas</p>)}
            </div>
        </div>
    </>

}

export default DetailedBlog