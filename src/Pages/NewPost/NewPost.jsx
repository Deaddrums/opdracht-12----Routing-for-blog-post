import './NewPost.css'
import {useForm} from "react-hook-form";
import ReadtimeCalculator from "../../Helpers/ReadtimeCalculator/ReadtimeCalculator.jsx";
import {useNavigate} from "react-router-dom";

function NewPost() {
    const {register, handleSubmit, watch} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {

        const postText = watch("post") || "";
        const readTime = ReadtimeCalculator(postText);
        const result = {
            ...data,
            readTime: readTime,
            comments: comments,
            shares: shares,
            created: new Date().toISOString()
        }
        console.log(result);
        navigate("/");
    }

    const comments = 0
    const shares = 0


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
                    id="post"
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