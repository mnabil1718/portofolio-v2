import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";


const projects = defineCollection({
    loader: glob({
        base: "./src/data/projects",
        pattern: "**/*.md"
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        metatitle: z.string(),
        desc: z.string(),
        image: image(),
        live_url: z.string().url().optional(),
        github_url: z.string().url().optional(),
    })
})

export const collections = { projects }
