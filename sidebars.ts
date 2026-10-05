import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Each section of the wiki lives in its own folder as a README.md,
 * so doc IDs take the form '<folder>/README'. The order below follows
 * the Contents list in docs/README.md.
 */
const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'getting-started/README',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'accounts-login/README',
      label: 'Accounts and Login',
    },
    {
      type: 'doc',
      id: 'hardware/README',
      label: 'HPC Hardware and Resources',
    },
    {
      type: 'doc',
      id: 'slurm/README',
      label: 'SLURM Job Submission',
    },
    {
      type: 'doc',
      id: 'storage/README',
      label: 'Storage and File Management',
    },
    {
      type: 'doc',
      id: 'software/README',
      label: 'Software and Conda Environments',
    },
    {
      type: 'doc',
      id: 'workflows/README',
      label: 'Bioinformatics Workflows',
    },
    {
      type: 'doc',
      id: 'troubleshooting/README',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'faq/README',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'support/README',
      label: 'HPC Support',
    },
  ],
};

export default sidebars;
