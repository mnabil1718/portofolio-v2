import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { ProjectSchemaFactory } from "./schemas/project";
import { ExperienceSchemaFactory } from "./schemas/experience";


const projects = defineCollection({
    loader: glob({
        base: "./src/data/projects",
        pattern: "**/*.md"
    }),
    schema: ({ image }) => ProjectSchemaFactory(image)
})


const experiences = defineCollection({
    loader: file("src/data/experiences.json"),
    schema: ({ image }) => ExperienceSchemaFactory(image)
})

export const collections = { projects, experiences }
