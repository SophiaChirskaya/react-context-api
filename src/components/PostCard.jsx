import { Link } from "react-router-dom";


    const PostCard = (props) => {

        const { post } = props;


        return (
            <>

                    <div className="postItem" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <img className="img-post" src={post.image} alt={post.title} />
                        <h2>{post.tags.join(", ")}</h2>
                        <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                    </div>

            </>
        )



    }

    export default PostCard