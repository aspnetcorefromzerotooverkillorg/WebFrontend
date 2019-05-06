import { Module } from 'vuex';
import { GroupState } from './state';
import { RootState } from '@/store/state';
import { makeActions } from './actions';
import { mutations } from './mutations';
import { GroupsService } from '@/data/groups/groups-service';

export const groups: Module<GroupState, RootState> = {
    namespaced: true,
    actions: makeActions(new GroupsService()),
    mutations,
    state: {
        groups: [],
    },
};
