import Link from "next/link";

type Props = {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{
        language?: "ru" | "en" | "fn" | "de" | undefined;
        edit?: string;
    }>;
};

const NewsArticle = async ({ params, searchParams }: Props) => {
    const { articleId } = await params;
    const { language = "ru", edit } = await searchParams;

    return (
        <div>
            <h1>News id: {articleId}</h1>
            <p>Language: {language}</p>
            <div className="flex flex-col gap-2">
                <Link href={`/articles/${articleId}?language=ru&edit=true`}>
                    Read in Russian (open modal)
                </Link>
                <Link href={`/articles/${articleId}?language=en`}>
                    Read in English
                </Link>
                <Link href={`/articles/${articleId}?language=fr`}>
                    Read in France
                </Link>
                <Link href={`/articles/${articleId}?language=de`}>
                    Read in German
                </Link>
            </div>
            {edit && (
                <div className="fixed inset-0 bg-amber-950 bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-green-950 p-6 rounded-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Edit</h2>
                        <p>Article editing form ({articleId}) </p>
                        <div className="mt-4 flex justify-end">
                            <Link
                                className="px-4 py-2 bg-gray-600 rounded"
                                href={`/articles/${articleId}?language=${language}`}
                            >
                                Close
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsArticle;
