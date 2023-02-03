import { initPlasmicLoader } from '@plasmicapp/loader-react';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'dPRrTyFHK7W9ZJqYsJHqzM', // ID of a project you are using
      token:
        '9VJm8vnHA9jgk2CAmCPZMDp8PcRTuXVgWHZvERQgpCuVsvokC5slwcNOvjPtFuM0GnnuXWDS5bWhuqpmnKLOg', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
