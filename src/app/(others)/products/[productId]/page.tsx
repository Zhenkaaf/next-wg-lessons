type ProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};

const Product = async ({ params }: ProductPageProps) => {
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
