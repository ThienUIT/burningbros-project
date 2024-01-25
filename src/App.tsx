import { useLoaderData } from "react-router-dom";

function App() {
    const product = useLoaderData();
    console.log(product);
    return (
        <h1 className="text-5xl font-bold underline">
            Hello world!
        </h1>
    )
}

export default App
