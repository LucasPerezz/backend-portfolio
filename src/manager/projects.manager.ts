import proyectModel from "../models/proyects.model";
import { Proyect, Skill } from "../types";
import skillsModel from "../models/skills.model";

class ProjectsManager {
    constructor() {}

    async GET_allProjects(): Promise<Proyect[] | undefined> {
        try {
            const result: Proyect[] = await proyectModel.find();
            return result;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }


    async GET_allSkills(): Promise<Skill[] | null | undefined> {
        try {
            const result: Skill[] | null = await skillsModel.find();
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async POST_project(project: Proyect): Promise<string | null | undefined> {
        try {
            await proyectModel.create(project);
            return "projecto cargado";
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    async POST_skill(skill: Skill): Promise<string | null | undefined> {
        try {
            await skillsModel.create(skill);
            return "skill cargado"
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}

const projectsManager = new ProjectsManager();

export default projectsManager;
