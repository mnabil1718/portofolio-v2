interface Experience {
    company: string;
    role: string;
    img: string;
    imgAlt: string;
    from: string;
    to: string;
    jobdesks: string[];
}

export function ExperienceItem({ exp }: { exp: Experience }) {
    return (
        <li className="flex flex-col gap-1 md:flex-row md:gap-4">

            <div className="text-muted-foreground text-xs md:w-32 md:flex-none md:pt-1 text-right">
                <span>{exp.from}</span> <span className="md:hidden">-</span> <br className="hidden md:block" /> <span>{exp.to}</span>
            </div>

            <div className="hidden md:flex md:flex-col md:items-center">
                <div className="bg-foreground mt-1 h-1.5 w-1.5 flex-none rounded-full" />
                <div className="bg-border w-px flex-1" />
            </div>

            <div className="pb-10 md:pl-4">
                <div className="flex items-start gap-4">
                    <div className="relative flex-none h-10 w-10 overflow-hidden rounded-md">
                        <img src={exp.img} alt={exp.imgAlt} width={40} height={40} />
                    </div>
                    <div>
                        <h2 className="font-semibold">{exp.company}</h2>
                        <p className="text-muted-foreground mb-3 text-xs">{exp.role}</p>
                        <ul className="flex list-inside list-disc flex-col gap-2 text-sm">
                            {exp.jobdesks.map((task) => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}
