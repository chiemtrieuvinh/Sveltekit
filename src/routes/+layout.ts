import type { LayoutLoad } from "./$types";

// layout state is used for global
// children data can have this message
export const load: LayoutLoad = async (event) => {
  return {
    message: "Hello",
  };
};
