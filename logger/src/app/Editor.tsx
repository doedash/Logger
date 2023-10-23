import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Editor.scss';

function Editor() {

    const [value, setValue] = useState("");
    const [press, setPress] = useState({ key: "" });
    const [caret, setCaret] = useState(0);

    const keyUp = useRef((key: string) => { })

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            console.log(e.key)
            setPress(e);
        })
    }, [])


    useEffect(() => {
        if (press.key == "Shift") {

        }
        else if (press.key == "Backspace") {
            setValue(value.substring(0, value.length - 1))
        }
        else
            setValue(value + press.key)
        console.log("set");

    }, [press])

    return (
        <div className="Editor">
            <span>{value}</span>
        </div>
    );
}

export default Editor;