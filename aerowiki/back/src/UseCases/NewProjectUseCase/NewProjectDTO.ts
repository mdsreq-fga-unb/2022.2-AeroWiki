export interface INewProjectRequestDTO {
  name: string;
  area: string;
  subarea: string;
  isfixed: boolean;
  editable: boolean;
  ongoing: boolean;
  active: boolean;
  project: object;
}