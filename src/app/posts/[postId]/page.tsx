type PostProps = {
    params: Promise<{
        postId: string;
    }>;
};

const Post = async ({ params }: PostProps) => {
    const { postId } = await params;
    const post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
    ).then((res) => res.json());

    return <div>{post.title}</div>;
};

export default Post;
