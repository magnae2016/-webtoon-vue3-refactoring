import { Module } from "vuex";
import { State as RootState } from "@/store";

export interface State {
  all: number[]
}

// initial state
const state: State = {
  all: [1, 2, 3],
}

const getters = {}

const mutations = {}

const actions = {}

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}