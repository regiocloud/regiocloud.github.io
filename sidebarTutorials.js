// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarTutorials = {
  tutorialsSidebar: [
    'index',
    'terraform',
    {
      type: "category",
      label: "Hetzner Community",
      link: { type: "doc", id: "hetzner-community/index"},
      items: [
          'hetzner-community/install-and-configure-prometheus-stack',
      ]
    },
  ],
};

module.exports = sidebarTutorials;
