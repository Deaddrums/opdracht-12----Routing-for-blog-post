import './NewPost.css'
// import {useForm} from "react-hook-form";
// import ReadtimeCalculator from "../../Helpers/ReadtimeCalculator/ReadtimeCalculator.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function NewPost() {
   const [formData, setFormData] = useState({
       title: '',
       subtitle: '',
       content: '',
       created: new Date(),
       author: '',
       readTime: 0,
       comments: 0,
       shares: 0
   })
    const navigate = useNavigate();
     async function handleSubmit(e) {
e.preventDefault();
        // const postText = watch("content") || "";
        // const readTime = ReadtimeCalculator(postText);
console.log("hier iets")

        try {
            const response = await axios.post(
                "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                formData,
                {
                    headers: {
                        'novi-education-project-id': "6dc266a5-f7e7-48b9-b611-ba16d2a28f65"
                    }
                }
            );

            console.log("Post succesvol:", response.data);

            // navigate("/");

        } catch (error) {
            console.error("Fout bij posten:", error);
        }

        console.log('yo');
    }

    // const comments = 0
    // const shares = 0

    return <>
        <form onSubmit={handleSubmit}>
            <div className="formWrapper">
                <input
                    type="text"
                    placeholder="Titel"
                    name="title"
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    value={formData.title}
                />

                <input
                    type="text"
                    placeholder="Subtitel"
                    name="subtitle"
                    onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                    value={formData.subtitle}
                />
                <input
                    type="text"
                    placeholder="Auteur"
                    name="author"
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    value={formData.author}
                />
                <textarea

                    placeholder="Type hier je bericht"
                    minLength='300'
                    maxLength='2000'
                    name="content"
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    value={formData.content}
                />

                <button type="submit">Submit</button>

            </div>
        </form>

    </>

}

export default NewPost;