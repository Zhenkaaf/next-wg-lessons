import Card from "@/src/components/card";
import Link from "next/link";

const ArhivedAdverts = () => {
    return (
        <Card>
            <div className="flex flex-col">
                <h2>Arhived adverts:</h2>
                <Link href="/complex-board">Active adverts--</Link>
            </div>
        </Card>
    );
};

export default ArhivedAdverts;
