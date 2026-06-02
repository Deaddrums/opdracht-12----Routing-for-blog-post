import './NewPost.css'
import {useForm} from "react-hook-form";
import ReadtimeCalculator from "../../Helpers/ReadtimeCalculator/ReadtimeCalculator.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function NewPost() {
    const {register, handleSubmit, watch} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {

        const postText = watch("content") || "";
        const readTime = ReadtimeCalculator(postText);
        const result = {
            title: data.title,
            subtitle: data.subtitle,
            content: data.content,
            created: 0,
            author: data.author,
            readTime: readTime,
            comments: 0,
            shares: 0
        };



        try {
            const response = await axios.post(
                "https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                result,
                {
                    headers: {
                        'novi-education-project-id': "6dc266a5-f7e7-48b9-b611-ba16d2a28f65"
                    }
                }
            );

            console.log("Post succesvol:", response.data);

            navigate("/");

        } catch (error) {
            console.error("Fout bij posten:", error);
        }

        console.log(result);
    }

    // const comments = 0
    // const shares = 0

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formWrapper">
                <input
                    type="text"
                    placeholder="Titel"
                    id="title"
                    {...register("title")}
                />

                <input
                    type="text"
                    placeholder="Subtitel"
                    id="subTitle"
                    {...register("subTitle")}
                />
                <input
                    type="text"
                    placeholder="Auteur"
                    id="author"
                    {...register("author")}
                />
                <textarea

                    placeholder="Type hier je bericht"
                    id="content"
                    minLength='300'
                    maxLength='2000'
                    {...register("post")}
                />

                <button type="submit">Submit</button>

            </div>
        </form>

    </>

}

export default NewPost;