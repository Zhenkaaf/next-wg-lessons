import Counter from "./Counter";
export const metadata = {
    title: "Counter",
};
const CounterBody = () => {
    return (
        <div>
            <h2>CounterBody---------------</h2>
            <Counter />
            <h2>CounterBody---------------</h2>
        </div>
    );
};

export default CounterBody;
