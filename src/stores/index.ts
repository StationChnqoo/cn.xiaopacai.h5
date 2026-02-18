import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useDuoleStore = defineStore(
  "duole",
  () => {
    const defaultGame = ref("gj");
    const isHawk = ref(false);
    return { defaultGame, isHawk };
  },
  {
    persist: true,
  },
);

export const useFundStore = defineStore(
  "fund",
  () => {
    const msn = ref({
      apiKey: "0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM",
      activityId: "6981448a-200a-4e5a-9586-e00164638bd7",
    });
    return { msn };
  },
  {
    persist: true,
  },
);

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref<any>(null);
    return { user };
  },
  {
    persist: true,
  },
);
