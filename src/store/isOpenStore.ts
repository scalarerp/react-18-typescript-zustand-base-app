import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IsOpenStore {
  sidebar: boolean
}

const initialValues: IsOpenStore = {
  sidebar: false,
}

export type IOpenStoreNames = keyof IsOpenStore

interface IsOpenStoreMethods {
  // methods
  toggleByName: (key: IOpenStoreNames) => void
  closeByName: (key: IOpenStoreNames) => void
  openByName: (key: IOpenStoreNames) => void
  isOpen: (key: IOpenStoreNames) => boolean
  closeAll: () => void
}

export const useIsOpenStore = create<IsOpenStore & IsOpenStoreMethods>()(
  devtools(
    (set, get) => ({
      ...initialValues,
      toggleByName: (key: IOpenStoreNames) =>
        set((state) => ({ [key]: !state[key] })),
      closeByName: (key: IOpenStoreNames) => set(() => ({ [key]: false })),
      openByName: (key: IOpenStoreNames) => set(() => ({ [key]: true })),
      isOpen: (key: IOpenStoreNames) => get()[key],
      closeAll: () => set({ ...initialValues }),
    }),
    { name: 'isOpen_Store' }
  )
)
