import { MutationTree } from 'vuex';
import { GroupState, Group } from './state';

let currentId: number = 0;

export const mutations: MutationTree<GroupState> = {
    setGroups(state, groups: Group[]): void {
      state.groups = [...groups];
    },
    add(state, group: Group): void {
      group.id = ++currentId;
      state.groups = [...state.groups, group];
    },
    update(state, group: Group): void {
      const index = state.groups.findIndex((g) => g.id === group.id);
      state.groups = [...state.groups.slice(0, index), group, ...state.groups.slice(index + 1, state.groups.length)];
    },
    remove(state, groupId: number): void {
      state.groups = state.groups.filter((g) => g.id !== groupId);
    },
};
