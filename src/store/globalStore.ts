import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { immer } from 'zustand/middleware/immer'
// import { goTo } from 'router'
// import { useIsOpenStore } from './isOpenStore'

// const isOpenStore = useIsOpenStore.getState()

interface IGlobalStore {
  Error?: string
  ErrorName?: string
}

interface IGlobalStoreActions {
  clearAll: () => void
}

const initialValues: IGlobalStore = {
  Error: undefined,
  ErrorName: undefined,
}

export const globalStore = create<IGlobalStore & IGlobalStoreActions>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...initialValues,
          clearAll: () => {
            set(() => initialValues)
          },
        }),

        {
          name: `global_Store`,
          partialize: (state) => ({ ...state }),
          storage: createJSONStorage(() => localStorage),
        }
      )
    ),
    { name: 'global_Store' }
  )
)
