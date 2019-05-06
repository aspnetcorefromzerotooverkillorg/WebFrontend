import { ActionTree } from 'vuex';
import { GroupState, Group } from './state';
import { RootState } from '@/store/state';
import { GroupsService } from '@/data/groups/groups-service';
import { GroupsEndpoint } from '@/data/groups/groups-endpoint';

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove',
};

// const groupsService = new GroupsService();

export const makeActions = (groupsEndpoint: GroupsEndpoint): ActionTree<GroupState, RootState> => {
  return {
    async loadGroups({commit}): Promise<void> {
      const groups = await groupsEndpoint.GetAll();
      commit('setGroups', groups);
    },
    async add({commit}, group: Group): Promise<void> {
      const addedGroup = await groupsEndpoint.add(group);
      commit('add', addedGroup);
    },
    async update({commit}, group: Group): Promise<void> {
      const updatedGroup = await groupsEndpoint.update(group);
      commit('update', updatedGroup);
    },
    async remove({commit}, groupId: number): Promise<void> {
      await groupsEndpoint.remove(groupId);
      commit('remove', groupId);
    },
  };
};
