import { ComponentType, Action } from './actions'

export interface FormState {
  form: ComponentType[]
}

const initialState = {
  form: []
}

export const formReducer = (state: FormState = initialState, action: Action) => {
  switch (action.type) {
    case "FORM_UPDATE": {
      return { ...state, form: [...state.form, action.payload]}
    }
    default: 
      return state;
  }
}