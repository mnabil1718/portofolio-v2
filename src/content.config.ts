import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { ProjectSchemaFactory } from "./schemas/project";


const projects = defineCollection({
    loader: glob({
        base: "./src/data/projects",
        pattern: "**/*.md"
    }),
    schema: ({ image }) => ProjectSchemaFactory(image)
})

export const collections = { projects }
