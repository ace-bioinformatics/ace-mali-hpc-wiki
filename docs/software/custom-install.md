---
id: custom-install
title: Installing Custom Software
---

Users can install software in their home or project directories.

### Steps
1. Load necessary compilers/tools (e.g., `module load gcc/11.2`).
2. Download the software source (e.g., via `wget`).
3. Compile and install in `/home/$USER/software`:
   ```bash
   ./configure --prefix=/home/$USER/software/myapp
   make && make install
4. Add to your $PATH:
    ```bash
    export PATH=$PATH:/home/$USER/software/myapp/bin

### Notes:
Avoid installing in system directories.
Contact if you need help