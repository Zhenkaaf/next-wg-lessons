import { notFound } from "next/navigation";

type ReviewProps = {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
};
const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
};
//http://localhost:3000/products/3/reviews/8
const Review = async ({ params }: ReviewProps) => {
    console.log("NEW RENDER");
    const { productId, reviewId } = await params;
    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Data fetching error - 50%");
    }
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <p>product id: {productId}</p>
            <p>review id: {reviewId}</p>
        </div>
    );
};

export default Review;
