import React, { useState } from "react";
import './Text.css';

const Text = (props) => {

    const [TextShow, setTextShow] = useState(props.text.slice(0, props.maxLength));
    const [AllText, setAllText] = useState(false);
    const [SpanText, setSpanText] = useState("...read more");

    const handleShowText = () => {
        if (AllText) {
            setTextShow(props.text.slice(0, props.maxLength));
            setSpanText("...read more");
            setAllText(false);
        } else {
            setTextShow(props.text);
            setSpanText("show less");
            setAllText(true);
        }
    };

    return (
        <div className="text">
            {TextShow} <span onClick={handleShowText}>{SpanText}</span>
        </div>
    );
};

export default Text;