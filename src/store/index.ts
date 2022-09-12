import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, createLogger } from 'vuex'
import { webtoon, State as WebtoonState } from "./modules/webtoon";

export interface State {
  count: number
  webtoon: WebtoonState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 10
  } as State,
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    webtoon
  },
  plugins: [createLogger()],
  strict: true,
})

export function useStore() {
  return baseUseStore(key);
}