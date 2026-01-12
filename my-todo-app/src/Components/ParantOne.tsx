import ChildOne from "./ChildOne";

export interface parantDataType {
    name : string;
    id: number
}

const ParantOne = () => {

    const listOne : parantDataType = {
        name: "React with Typescript",
        id: 123
    }

    return (
        <>
        <h1>I am Parant One Component</h1>
        <ChildOne parantData={listOne} />
        </>

    )
}

export default ParantOne;