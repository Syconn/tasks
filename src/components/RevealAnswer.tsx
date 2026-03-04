import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState(false)

    return (
        <div>
            Reveal Answer
            <Button onClick={() => { setShow(!show) }}>Reveal Answer</Button>
            {show && (<span>42</span>)}
        </div>
    );
}
