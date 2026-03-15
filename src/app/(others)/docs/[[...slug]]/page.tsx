type DocsProps = {
    params: Promise<{ slug: string[] }>;
};

const Docs = async ({ params }: DocsProps) => {
    const { slug } = await params;
    if (!slug || slug.length === 0) {
        return <h1>Main page of Docs</h1>;
    }
    if (slug.length === 1) {
        return <h1>Section: {slug[0]}</h1>;
    }
    if (slug.length === 2) {
        return (
            <h1>
                Subsection: {slug[1]} in Section: {slug[0]}
            </h1>
        );
    }

    if (slug.length === 3) {
        return (
            <h1>
                Category: {slug[2]} in Subsection: {slug[1]} in Section:{" "}
                {slug[0]}
            </h1>
        );
    }
    console.log(slug);
    return (
        <div>
            <p>Deep nesting: {slug.join("/")} </p>
        </div>
    );
};

export default Docs;
