export interface IUpdateProjectRequest{
  id: string,
  name: string
  isfixed: boolean
  editable: boolean
  ongoing: boolean
  active: boolean
  project: object
}