import { GroupModel } from './models/group-model';

export interface GroupsEndpoint {
    GetAll(): Promise<GroupModel[]>;
    GetById(id: number): Promise<GroupModel>;
    add(group: GroupModel): Promise<GroupModel>;
    update(group: GroupModel): Promise<GroupModel>;
    remove(id: number): Promise<void>;
}
