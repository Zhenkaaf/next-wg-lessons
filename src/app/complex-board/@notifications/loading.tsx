import Card from "@/src/components/card";

export default function Loading() {
    return (
        <Card>
            <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-500 rounded w-32"></div>
            </div>
        </Card>
    );
}
