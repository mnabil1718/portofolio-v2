export function Tool({ text, url }: { text: string, url: string }) {
    return <a
        href={url}
        className="hover:text-chart-3 hover:before duration-300 before:content-[''] hover:before:content-['>_']"
    >{text}</a
    >
}
