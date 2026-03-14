import { notFound } from "next/navigation";

type ReviewProps = {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
};
//http://localhost:3000/products/3/reviews/8
const Review = async ({ params }: ReviewProps) => {
    const { productId, reviewId } = await params;

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
