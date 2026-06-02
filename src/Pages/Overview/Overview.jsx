import './Overview.css'
// import data from '../../constants/data.json'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


function Overview() {
    const [post, setPost] = useState([])
    const [error, toggleError] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            toggleError(false)
            try {
                const allPosts = await axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts", {
                    headers: {
                        'novi-education-project-id': "6dc266a5-f7e7-48b9-b611-ba16d2a28f65"
                    }
                })
                console.log(allPosts.data)
                setPost(allPosts.data)
            } catch (e) {
                console.error(e)
                toggleError(true)
            }

        }

        fetchPosts();
    }, []);


    return <>

        <div className="allBlogs">
            <div className="allBlogsContainer">

                {post.length > 0 && (<>

                        <h1>Bekijk hier alle {post.length} posts</h1>
                        <ul className="postBreakdown">
                            {post.map((post) => (<li key={post.id}>
                                    <Link to={`/blog/${post.id}`}><h2>{post.title}</h2></Link>
                                    <p>Auteur: {post.author}</p>
                                    <p>{post.comments} reacties</p>
                                    <p>{post.shares} keer gedeeld</p>
                                </li>
                            ))}
                        </ul>

                    </>)}

                {error && (<p>Oops! Foutje! Kan gebeuren baas</p>)}


            </div>
        </div>

    </>

}

export default Overview