import { configure } from "@storybook/react";

// automatically import all files ending in *.story.tsx
const req = require.context("../src", true, /\.story\.[t|j]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
