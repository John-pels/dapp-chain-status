import "../src/styles/_globals.scss";
import "../src/components/Table/style.module.scss";
import "../src/components/Spinner/style.module.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
