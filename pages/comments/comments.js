
const Comments = ({ comments }) => {
    // console.log(comments);
    return (
        <div>
            {
                comments.map(comment => <h1
                    key={comment.id}
                    className='my-10 mx-auto text-2xl'
                >{comment.body}</h1>)
            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }
}