import { DispatchType, EducationAction, EducationState, IEducation } from "../types/Education"
import * as actionTypes from "./actionTypes"

export const addEducation = (education: IEducation) => {
    const action: EducationAction = {
        type: actionTypes.ADD_EDUCTION,
        education,
    }

    return handleEducationChange(action)
}

export const delEducation = (education: IEducation) => {
    const action: EducationAction = {
        type: actionTypes.REMOVE_EDUCTION,
        education,
    }

    return handleEducationChange(action)
}

export const handleEducationChange = (action: EducationAction) => {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}