import { v4 as uuid_v4 } from "uuid";

export class Project {
    public readonly id: String;

    public name: string;
    public area: string;
    public subarea: string;
    public ongoing: boolean;
    public active: boolean;

    constructor(props: Omit<Project, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid_v4();
        }
    }
}