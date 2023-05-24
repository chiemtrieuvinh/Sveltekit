// @ts-nocheck
import type { LayoutLoad } from "./$types";

// layout state is used for global
// children data can have this message
export const load = async (event: Parameters<LayoutLoad>[0]) => {
  return {
    message: "Hello",
  };
};
