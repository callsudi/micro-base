import { registerMicroApps, addGlobalUncaughtErrorHandler } from "qiankun";
import { MicroApps } from "@/config";

const { subApps } = MicroApps;

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        (app) => {
          console.log("Micro before load", app);
        },
      ],
      beforeMount: [
        (app) => {
          console.log("Micro before mount", app);
        },
      ],
      afterUnmount: [
        (app) => {
          console.log("Micro before unmount", app);
        },
      ],
    });
  } catch (err) {
    console.error("Micro", err);
  }
  addGlobalUncaughtErrorHandler((event) => console.log("addGlobalUncaughtErrorHandler", event));
}
