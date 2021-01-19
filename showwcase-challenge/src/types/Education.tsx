export interface IEducation {
    id: number,
    name: string,
    degree: string,
    field: string,
    GPA: string,
    startYear: number,
    endYear: number,
    description: string,
}

export type EducationState = {
    educations: IEducation[],
}


export type EducationAction = {
    type: string,
    education: IEducation,
}

export type FetchEducationAction = {
    type: string,
    schools: string[],
}

export type DispatchType = (args: EducationAction) => EducationAction;