import { v4 as uuid_v4 } from "uuid";

export class Project {
    public /*readonly*/ id: String;

    public name: string;
    public area: string;
    public subarea: string;
    public isfixed: boolean;
    public editable: boolean;
    public ongoing: boolean;
    public active: boolean;
    public project: object;

    constructor(props: Omit<Project, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid_v4();
        }
    }
}