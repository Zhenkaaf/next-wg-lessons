import Card from "@/src/components/card";

const page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return <Card>Notifications</Card>;
};

export default page;
