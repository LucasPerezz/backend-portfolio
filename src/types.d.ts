import { ObjectId } from "mongoose"

export interface Skill {
    language: string | undefined | null,
    image: string | undefined | null
}

export interface Proyect {
    proyect: string,
    github: string,
    url: string,
    utilities: Skill[],
    image: string
}