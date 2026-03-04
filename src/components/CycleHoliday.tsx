import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "🎆"
    | "🐣"
    | "🎃"
    | "🦃"
    | "🎄";

// 🔤 Alphabetical order
const nextAlphabetical: Record<Holiday, Holiday> = {
    "🎄": "🐣",   // Christmas → Easter
    "🐣": "🎃",   // Easter → Halloween
    "🎃": "🎆",   // Halloween → New Year
    "🎆": "🦃",   // New Year → Thanksgiving
    "🦃": "🎄"    // Thanksgiving → Christmas
};

// 📅 Calendar order
const nextByYear: Record<Holiday, Holiday> = {
    "🎆": "🐣",   // New Year → Easter
    "🐣": "🎃",   // Easter → Halloween
    "🎃": "🦃",   // Halloween → Thanksgiving
    "🦃": "🎄",   // Thanksgiving → Christmas
    "🎄": "🎆"    // Christmas → New Year
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    return (
        <div>
            <h3>Holiday: {holiday}</h3>

            <Button onClick={() => { setHoliday(nextAlphabetical[holiday]) }}>
                Advance by Alphabet 🔤
            </Button>

            <Button onClick={() => { setHoliday(nextByYear[holiday]) }}>
                Advance by Year 📅
            </Button>
        </div>
    );
}
