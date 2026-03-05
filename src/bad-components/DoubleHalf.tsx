import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    setDhValue: Dispatch<SetStateAction<number>>
}

function Doubler({ setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(prev => 2 * prev);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(prev => 0.5 * prev);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue}></Doubler>
            <Halver setDhValue={setDhValue}></Halver>
        </div>
    );
}
