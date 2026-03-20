import Card from "@/src/components/card";
import Link from "next/link";

const Advertising = () => {
    return (
        <Card>
            <div className="flex flex-col">
                <h2>Advertising</h2>
                <Link href="/complex-board">Active adverts--</Link>
                <Link href="/complex-board/arhived">Arhived adverts--</Link>
            </div>
        </Card>
    );
};

export default Advertising;
