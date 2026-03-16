"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentSelector = ({
    initialPostId = "1",
}: {
    initialPostId?: string;
}) => {
    const [postId, setPostId] = useState(initialPostId);
    const [commentId, setCommentId] = useState("");
    const router = useRouter();
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!postId || !commentId) return;
        router.push(`/posts/${postId}/comments/${commentId}`);
    };
    return (
        <div>
            <h3>Choose other comment</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postId">Number of post</label>
                    <input
                        type="number"
                        value={postId}
                        onChange={(e) => setPostId(e.target.value)}
                        placeholder="Number of Post"
                        id="postId"
                        min="1"
                        required
                        className="border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="commentId">Number of comment</label>
                    <input
                        type="number"
                        value={commentId}
                        onChange={(e) => setCommentId(e.target.value)}
                        placeholder="Number of Comment"
                        id="commentId"
                        min="1"
                        required
                        className="border p-2"
                    />
                </div>
                <button type="submit">Go!</button>
            </form>
        </div>
    );
};

export default CommentSelector;
