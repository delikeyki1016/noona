const Box = (props) => {
    console.log("box props", props);
    let resultClass;
    props.result === "Win"
        ? (resultClass = "win")
        : props.result === "Loose"
        ? (resultClass = "loose")
        : (resultClass = "tie");

    return (
        <div className={`box ${resultClass}`}>
            <h1>{props.title}</h1>
            <img
                src={props.item && props.item.img}
                alt={props.item && props.item.name}
            />
            <p>{props.result}</p>
        </div>
    );
};

export default Box;
