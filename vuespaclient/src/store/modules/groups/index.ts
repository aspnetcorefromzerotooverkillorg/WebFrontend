import { Module } from 'vuex';
import { GroupState } from './state';
import { RootState } from '@/store/state';
import { actions } from './actions';
import { mutations } from './mutations';

export const groups: Module<GroupState, RootState> = {
    namespaced: true,
    actions,
    mutations,
    state: {
        groups: [],
    },
};
