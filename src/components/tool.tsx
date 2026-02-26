export function Tool({ text, url }: { text: string, url: string }) {
    return <a
        href={url}
        className="hover:text-chart-3 hover:font-semibold hover:before before:content-[''] hover:before:content-['>_']"
    >{text}</a
    >
}
