import {useState, useEffect} from "react";
import axios from "axios";
import PostCard from "./PostCard";



    const BlogsList = () => {
        const [posts, setPosts] = useState([]);
        

        function fetchPosts() {
          axios.get("http://localhost:3000/posts")
          .then((res) =>
            setPosts(res.data)
          
        )
        }

        useEffect(fetchPosts, []);



        return (
            <>

            {
                posts.map((post, I) => (
                    <PostCard key={post.id} post={post}/>

                ))
            }
            </>
        )



    }

    export default PostsListUser