import { Metadata } from "next";

interface Post {
    id: number;
    title: string;
    body: string;
}

type Props = {
    params: Promise<{
        postId: string;
    }>;
};

async function getPost(postId: string) {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );
        if (!res.ok) throw new Error(`Server  Error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error(`Post error:`, err);
        throw err;
    }
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const { postId } = await params;
    const post = await getPost(postId);
    return {
        title: `${post.title} | My Blog`,
        description: post.body.slice(0, 160),
    };
};

const Post = async ({ params }: Props) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { postId } = await params;
    const post = await getPost(postId);

    return <div>{post.title}</div>;
};

export default Post;
