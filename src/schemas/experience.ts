import { z } from "astro/zod";

export const ExperienceSchemaFactory = (image: () => z.ZodType) => z.object({
    id: z.number().int(),
    company: z.string(),
    role: z.string(),
    image: image(),
    from: z.coerce.date(),
    to: z.coerce.date().optional(),
    jobdesks: z.array(z.string()),
})

export type Experience = z.infer<ReturnType<typeof ExperienceSchemaFactory>>
