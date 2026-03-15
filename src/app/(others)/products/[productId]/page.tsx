import { Metadata } from "next";

type Props = {
    params: Promise<{
        productId: string;
    }>;
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const { productId } = await params;
    return {
        title: `Product ${productId}`,
        description: `Product ${productId} - best seller`,
    };
};

const Product = async ({ params }: Props) => {
    //const result = await params;
    //const productId = result.productId;
    const { productId } = await params;

    return <div>Product description {productId}</div>;
};

export default Product;

/* const Product = async ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) => {
    const productId = (await params).productId;
    return <div>Product description {productId}</div>;
};

export default Product; */
