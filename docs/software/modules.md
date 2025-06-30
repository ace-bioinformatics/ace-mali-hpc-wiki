---
id: modules
title: Using Environment Modules
---

The ACE HPC Cluster uses Lmod to manage software environments.

### Basic Commands
- List available modules:
  ```bash
  module avail

- Load a module (eg., Python):
   ```bash
   module load python/3.9

- List loaded modules:
   ```bash
   module list

- Unload a module:
    ```bash
    module unload python/3.9

### Tips
Modules set environment variables (e.g., $PATH).
Check for a full list.