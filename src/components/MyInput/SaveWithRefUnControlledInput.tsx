import React, {useRef, useState} from "react";

export const SaveWithRefUnControlledInput = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const input = inputRef.current as HTMLInputElement
        setValue(input.value)
    }
    return (
        <>
            <h4>Save With Ref UnControlled Input</h4>
            <input ref={inputRef}/>
            <button onClick={saveValue}>save</button>
            --- <span>{value}</span>
        </>
    );

}