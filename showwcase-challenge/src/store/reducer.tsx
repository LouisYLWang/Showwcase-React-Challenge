import { EducationAction, EducationState, IEducation } from "../types/Education"
import * as actionTypes from "./actionTypes"

const initialState: EducationState = {
    educations: [
        {
            id: 1,
            name: "University of Washington",
            degree: "Master",
            field: "Computer Science",
            startYear: 2019,
            endYear: 2021,
            description: "Implement the screens based off the wireframes and api above using advanced techniques and industry best practices for your platform. Note that the wireframes may not be complete, so use your best judgment for UI/UX implementation."
        }
    ]
}

export const reducer = (
    state: EducationState = initialState,
    action: EducationAction
): EducationState => {
    switch (action.type) {
        case actionTypes.ADD_EDUCTION:
            const newEducation: IEducation = {
                id: state.educations.length + 1,
                name: action.education.name,
                degree: action.education.degree,
                field: action.education.field,
                startYear: action.education.startYear,
                endYear: action.education.endYear,
                description: action.education.description,
            }
            return {
                ...state,
                educations: state.educations.concat(newEducation),
            }
        case actionTypes.REMOVE_EDUCTION:
            const updatedEducations: IEducation[] = state.educations.filter(
                education => education.id != action.education.id
            )
            return {
                ...state,
                educations: updatedEducations,
            }
    }
    return state
}
