import React, {ChangeEvent, useState} from "react";

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