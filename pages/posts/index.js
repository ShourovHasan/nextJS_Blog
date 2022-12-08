import PostCard from "../../Components/PostCard/PostCard";

const Posts = ({posts}) => {
    // console.log(posts);
    return (
        <div className="my-20">
            <h1 className="text-2xl">The number of posts: {posts.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 m-10">
                {
                    posts.map(post => <PostCard
                        key={post.id}
                        post={post}
                    ></PostCard>)
                }
            </div>
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
    // console.log(data);
    return {
        props: {
            posts: data
        }
    }
}