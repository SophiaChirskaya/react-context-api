import {useContext} from "react";
import GlobalContext from "./../contexts/GlobalContext";
import PostCard from "./PostCard";


const PostsListUser = () => {

    const { posts } = useContext(GlobalContext);

    return (
        <>

        {posts.map((post, I) => (
                <PostCard key={post.id} post={post}/>

            ))}
        </>
    )
}

export default PostsListUser
