import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    const { title, body } = post;
    const router = useRouter();
    const handleBack = () => {
        router.push("/posts");
    }
    return (
        <div className="card bg-base-100 shadow-xl shadow-neutral m-10">
            <div className="card-body">
                <h2 className="card-title text-center justify-center border-2 rounded-lg">{title}</h2>
                <p className="text-justify">{body}</p>
                <div className="card-actions justify-center mt-5">
                    <button onClick={handleBack} className="btn btn-primary">Back to Post</button>
                </div>
            </div>
        </div>
    );
};


export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    // console.log(data);
    return {
        props: {
            post: data
        }
    }
}


export const getStaticPaths = async () => {    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false //if not found any route, that time will show 404 page not found
    }
}
export default PostDetails;