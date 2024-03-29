import { dbg, dbgLog } from "@/util";
import { ICensorBackend } from "@silveredgold/beta-shared/transport";
import clone from "just-clone";
import { defineStore, Pinia } from "pinia";
import { createApp, toRaw, unref } from "vue";
import { getPinia } from "./util";
// import browser from 'webextension-polyfill';

export interface StickerStoreState {
    available?: string[];
    enabled?: string[];
}

export const useStickerStore = (pinia?: Pinia|null|undefined, readOnly?: boolean|undefined) => defineStore('stickers', {
    state: (): StickerStoreState => {
        return { available: [], enabled: [] }
    },
    getters: {
    },
    actions: {
        loadFromMessage(message: any) {
            const stickerCategories = message['stickers'] === undefined
            ? message as string[]
            : message['stickers'] as string[];
            this.available = stickerCategories;
            // await browser.storage.local.set({'stickers': stickerCategories});
        },
        async tryRefreshAvailable(backend: ICensorBackend) {
            try {
                const stickers = await backend.getAvailableAssets('stickers');
                if (stickers !== undefined && stickers.length !== undefined) {
                    this.loadFromMessage(stickers);
                }
            } catch {
                //ignored
            }
            return this.available;
        },
        setCategory(category: string, enabled: boolean) {
          let curr = this.enabled!;
          if (!enabled) {
            dbg('disabling from enabledStickers', this.enabled, curr, category);
            curr = curr.splice(curr.indexOf(category), 1);
          } else {
            dbg('enabling from enabledStickers', curr, category);
            curr = curr.concat([category]);
          }
          dbg('patching stickers', curr, this.enabled);
          this.$patch({enabled: curr});
        }
    },
    subKey: 'available', readOnly
})(pinia);

export const loadStickerStore = async () => {
    const store = useStickerStore();
    return store;
}

export const buildStickerStore = (readOnly: boolean = true) => {
    const app = createApp(null!);
    const pinia = getPinia();
    // setActivePinia(pinia);
    app.use(pinia);

    const preferencesStore = useStickerStore(pinia, readOnly);
    return preferencesStore;
  }

  export const waitForStickerStore = async (readOnly: boolean = true) => {
    const store = buildStickerStore(readOnly);
    await store.ready;
    return store;
  }
