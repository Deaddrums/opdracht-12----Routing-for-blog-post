import './NewPost.css'
import { useForm } from "react-hook-form";

function NewPost() {
const {register, handleSubmit} = useForm();

const onSubmit = (data) => {
const result ={
    ...data,
    comments: comments,
    shares: shares,
    created: new Date().toISOString()
}

    console.log(result);
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
        <div
            id="commentsAndShares"
            {...register("commentsAndShares")}
        >
            {comments}
            {shares}
        </div>

        <button type="submit">Submit</button>

    </div>
</form>

    </>

}

export default NewPost;