"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/");
    const productId = pathSegments[2];
    const reviewId = pathSegments[4];
    return (
        <div>
            <h2>Review № {reviewId}</h2>
            <p>Could not find requested product: {productId}</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}
