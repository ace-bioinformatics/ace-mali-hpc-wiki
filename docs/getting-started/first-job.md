---
id: first-job
title: Submitting Your First Job
---

This tutorial walks you through submitting a simple job to the ACE HPC Cluster using SLURM.

### Step 1: Write a Job Script
Create a file named `test_job.sh`:

```bash
#!/bin/bash
#SBATCH --job-name=test_job
#SBATCH --output=test_job.out
#SBATCH --error=test_job.err
#SBATCH --time=00:05:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --mem=1gb

echo "Hello from the ACE HPC Cluster!"
hostname
sleep 60
```
### Step 2: Submit the Job

```bash
sbatch test_job.sh
```
You’ll see a job ID (e.g, `Submitted batch job 12345`).

### Step 3: View yout job in the queue
```bash
squeue -u $USER
```
Once completed, check `test_job.out` for output.