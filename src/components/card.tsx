const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        padding: 50,
        margin: 10,
        border: "1px solid #cdcdcd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return <div style={cardStyle}>{children}</div>;
};

export default Card;
