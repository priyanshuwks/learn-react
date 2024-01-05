
function Child1(props){
    return (
        <>
            <button onClick={props.gym}>Child count is: {props.count}</button>
        </>
    )
}

export default Child1;