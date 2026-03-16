import CommentSelector from "../_components/CommentSelector";

type CommentProps = {
    params: Promise<{
        postId: string;
        commentId: string;
    }>;
};

const Comment = async ({ params }: CommentProps) => {
    const { postId, commentId } = await params;
    const comment = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}?postId=${postId}`,
    ).then((res) => res.json());

    return (
        <div>
            <h1>Comment id: {comment.id}</h1>
            <p>{comment.body}</p>
            <p>Email: {comment.email}</p>
            <p>Post id: : {postId}</p>
            <CommentSelector />
        </div>
    );
};

export default Comment;
