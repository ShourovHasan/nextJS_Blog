import Link from "next/link";

const PostCard = ({post}) => {
    const { id, title, body } = post;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-center justify-center">{title}</h2>
                {/* <p className="text-justify">{body}</p> */}
                <div className="card-actions justify-center mt-5">
                    <Link href={`/posts/${id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;