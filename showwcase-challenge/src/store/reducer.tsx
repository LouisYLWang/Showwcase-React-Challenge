import {
  EducationAction,
  EducationState,
  IEducation,
} from "../types/Education";
import * as actionTypes from "./actionTypes";

const initialState: EducationState = {
  educations: [],
};

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
        GPA: action.education.GPA,
        startYear: action.education.startYear,
        endYear: action.education.endYear,
        description: action.education.description,
      };
      return {
        ...state,
        educations: state.educations.concat(newEducation),
      };
    case actionTypes.REMOVE_EDUCTION:
      const updatedEducations: IEducation[] = state.educations.filter(
        (education) => education.id != action.education.id
      );
      return {
        ...state,
        educations: updatedEducations,
      };
  }
  return state;
};
