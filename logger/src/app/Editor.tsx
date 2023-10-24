import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Editor.scss';

const useFocus = () => {
    const htmlElRef: any = useRef(null)
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

    return [htmlElRef, setFocus]
}

function Editor() {

    const [inputRef, setInputFocus] = useFocus()

    const [value, setValue] = useState("");
    const [press, setPress] = useState({ key: "" });
    const [caret, setCaret] = useState(0);

    const onClick = useCallback(setInputFocus, [])
    const onChange = useCallback((e: any) => setValue(e.target.value), [])
    const onSelect = useCallback((e: any) => setCaret(e.target.selectionStart), [])

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            // console.log(e.key)
            // setPress(e);
        })
    }, [])


    useEffect(() => {
        // if (press.key == "Shift") {

        // }
        // else if (press.key == "Backspace") {
        //     setValue(value.substring(0, caret - 2) + value.substring(caret - 1))
        //     setCaret(caret - 1)
        // }
        // else if (press.key == "ArrowLeft") {
        //     setCaret(caret - 1)
        // }
        // else if (press.key == "ArrowRight") {
        //     setCaret(caret + 1)
        // }
        // else if (press.key == " ") {
        //     setValue(value.substring(0, caret - 1) + "\xa0" + value.substring(caret - 1))
        //     setCaret(caret + 1)
        // }
        // else {
        //     setValue(value.substring(0, caret - 1) + press.key + value.substring(caret - 1))
        //     setCaret(caret + 1)
        // }
        console.log(inputRef.current.selectionStart);

        console.log("set");

    }, [press])

    useEffect(() => console.log(caret)
        , [caret])

    return (
        <div className="Editor" onClick={onClick}>
            <textarea className='textarea' ref={inputRef} value={value} onChange={onChange} onSelect={onSelect}></textarea>
            <span>{value.substring(0, caret)}</span>
            <span className='caret'>
                <span className="design"></span>
            </span>
            <span>{value.substring(caret, value.length)}</span>
        </div>
    );
}

export default Editor;