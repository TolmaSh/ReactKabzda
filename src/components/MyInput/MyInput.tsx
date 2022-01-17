import React, {ChangeEvent, useRef, useState} from 'react';


export const MyInput = () => {
    return (
        <>
            <SaveWithOnChangeUnControlledInput/>
            <SaveWithRefUnControlledInput/>
        </>
    );
}

export const SaveWithOnChangeUnControlledInput = () => {
    const [value, setValue] = useState<string>("")
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <h4>Save With OnChange UnControlled Input</h4>
            <input type="text" onChange={onChangeValueHandler}/> --- <span>{value}</span>
        </>
    );
};

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
