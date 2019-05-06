import { GroupsEndpoint } from './groups-endpoint';
import { GroupModel } from './models/group-model';
import axios from 'axios';

// TODO: handle eventual errors

export class GroupsService implements GroupsEndpoint {

    private readonly baseUrl: string = '/api/groups';

    public async GetAll(): Promise<GroupModel[]> {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    public async GetById(id: number): Promise<GroupModel> {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    public async add(group: GroupModel): Promise<GroupModel> {
        const response = await axios.post(this.baseUrl, group);
        return response.data;
    }

    public async update(group: GroupModel): Promise<GroupModel> {
        const response = await axios.put(`${this.baseUrl}/${group.id}`, group);
        return response.data;
    }

    public async remove(id: number): Promise<void> {
        await axios.delete(`${this.baseUrl}/${id}`);
    }
}
