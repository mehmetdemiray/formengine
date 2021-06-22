
export interface ComponentType {
  Key: number,
  Name: string,
  Type: string,
}

export type Action = {type: "FORM_UPDATE", payload: ComponentType}

export const updateForm = (form: ComponentType): Action => ({
  type: "FORM_UPDATE",
  payload: form
})