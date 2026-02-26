import { useAsciiText, slant, ansiShadow } from 'react-ascii-text';

export function Ascii() {
    const asciiTextRef = useAsciiText({
        animationCharacters: "▒░█",
        animationCharacterSpacing: 1,
        animationDelay: 1000,
        animationDirection: "down",
        animationInterval: 100,
        animationLoop: false,
        fadeInOnly: true,
        animationSpeed: 30,
        font: slant,
        text: `mnabil`,
    });

    return <div className="w-full overflow-hidden">
        <pre
            ref={asciiTextRef as React.RefObject<HTMLPreElement>}
            className="origin-left text-base font-bold"
        />
    </div>;
}
