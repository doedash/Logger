import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Editor.scss';

function Editor() {

    const [value, setValue] = useState("");
    const [press, setPress] = useState({ key: "" });
    const [caret, setCaret] = useState(0);

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
            setValue(value.substring(0, caret - 2) + value.substring(caret - 1))
            setCaret(caret - 1)
        }
        else if (press.key == "ArrowLeft") {
            setCaret(caret - 1)
        }
        else if (press.key == "ArrowRight") {
            setCaret(caret + 1)
        }
        else if (press.key == " ") {
            setValue(value.substring(0, caret - 1) + "\xa0" + value.substring(caret - 1))
            setCaret(caret + 1)
        }
        else {
            setValue(value.substring(0, caret - 1) + press.key + value.substring(caret - 1))
            setCaret(caret + 1)
        }
        console.log("set");

    }, [press])

    return (
        <div className="Editor">
            <span>{value.substring(0, caret - 1)}</span>
            <span className='caret'>
                <span className="design"></span>
            </span>
            <span>{value.substring(caret - 1, value.length)}</span>
        </div>
    );
}

export default Editor;