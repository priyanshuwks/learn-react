import { useState } from "react";
import Child1 from "./Child1";
function ParentToChild(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return (
        <>
            <button onClick={handleClick}>Count in Parent: {count}</button>
            <Child1 count={count} gym={handleClick}/>
            {/* gym prop is passed to Child1 component & in Child1 component when event
            'onClick' occurs prop gym passed value = handleClick & then react calls handleClick()
            function. */}
            <Child1 count={count} />

        </>
    )
}

export default ParentToChild;