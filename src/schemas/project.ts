import { z } from "astro/zod";

export const ProjectSchemaFactory = (image: () => z.ZodType) => z.object({
    title: z.string(),
    metatitle: z.string(),
    slug: z.string(),
    desc: z.string(),
    image: image(),
    live_url: z.string().url().optional(),
    github_url: z.string().url().optional(),
    created_at: z.coerce.date(),
})

export type Project = z.infer<ReturnType<typeof ProjectSchemaFactory>>
