import { ActionTree } from 'vuex';
import { GroupState, Group } from './state';
import { RootState } from '@/store/state';

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove',
};

export const actions: ActionTree<GroupState, RootState> = {
    loadGroups({commit}): void {
      const groups = [
        { id: 1, name: 'group - 1' },
        { id: 2, name: 'group - 2' },
        { id: 3, name: 'group - 3' },
      ];
      commit('setGroups', groups);
    },
    add({commit}, group: Group): void {
      commit('add', group);
    },
    update({commit}, group: Group): void {
      commit('update', group);
    },
    remove({commit}, groupId: number): void {
      commit('remove', groupId);
    },
};
