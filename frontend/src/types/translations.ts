export interface Translation {
    title: string;
    subtitle: string;
    featuredProjects: string;
    works: string;
    worksList: string[];
    devSkills: string;
    skillsList: string[];
    currentProjects: string;
    projectsList: string[];
    connect: string;
    connectText: string;
}

export interface Translations {
    [key: string]: Translation;
} 