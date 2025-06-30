---
id: faq
title: Frequently Asked Questions
---

**Q: How do I reset my password?**  
A: Contact [support@ace-bioinformatics.org](mailto:support@ace-bioinformatics.org) with your username and request a password reset.

**Q: Why is my job pending?**  
A: Your job is waiting for resources. Common reasons include:
- No available compute nodes
- Waiting for other higher-priority jobs
- Resource limits like CPU or memory requests are too high  
Use `squeue -u $USER` and `scontrol show job <jobid>` for more details.

**Q: Can I increase my storage quota?**  
A: Yes. Contact [support@ace-bioinformatics.org](mailto:support@ace-bioinformatics.org) to request a quota increase and explain your needs.

**Q: How do I know which modules are available?**  
A: Use `module avail` to see all available modules. If nothing shows, make sure you're using the correct environment or login node.

**Q: My script works on my laptop but fails here. Why?**  
A: HPC systems use different environments. You need to load modules and run jobs via Slurm (`sbatch`) instead of running them interactively.

**Q: What is a Slurm script and how do I create one?**  
A: A Slurm script is a shell script with special `#SBATCH` directives that tell the scheduler how to run your job. Example:

```bash
#!/bin/bash
#SBATCH --job-name=test
#SBATCH --output=result.out
#SBATCH --ntasks=1
#SBATCH --time=01:00:00

module load python
python myscript.py
```

**Q: Should I run everything on the login node?**  
A: No. Login nodes are for preparing jobs only. Use `sbatch` or `srun` to run on compute nodes.

**Q: What is the difference between `sbatch`, `srun`, and `salloc`?**  
A:  
- `sbatch`: Submits a job script to the queue  
- `srun`: Runs a job directly, often inside a script  
- `salloc`: Starts an interactive session with allocated resources

**Q: How do I monitor my job?**  
A: Use `squeue -u $USER` for job status, `sacct` for historical data, and `scontrol show job <jobid>` for detailed info.

**Q: My job was killed or failed. How do I find out why?**  
A: Check your `.out` or `.err` files and run `sacct -j <jobid> --format=JobID,State,ExitCode`.

**Q: Can I run graphical applications?**  
A: Yes, if the cluster supports X11 forwarding. You need to SSH with `-X` or `-Y` and load the necessary modules.

**Q: What’s the best way to transfer files to/from the HPC?**  
A: Use `scp`, `rsync`, or a file transfer service if provided. Example:

```bash
scp myfile.txt user@hpc.example.com:/path/to/dir
```

**Q: Why does my Python/R script fail to import libraries?**  
A: Make sure the right module is loaded or use a virtual environment/conda environment installed in your home directory.

**Q: Can I install custom packages?**  
A: Yes. Use conda, virtualenv, or build from source in your user space.

**Q: How do I cancel a job?**  
A: Use `scancel <jobid>` to stop a running or pending job.

**Q: How do I use more than one CPU or node?**  
A: Add `#SBATCH --ntasks=<N>` or `#SBATCH --nodes=<N>` in your script. Match this with parallel code or tools like `mpirun`.

**Q: What is a module and why do I need it?**  
A: Modules load software packages with the correct paths. Use `module load <name>` to make a tool available.

**Q: My job exceeds memory and crashes. How do I fix this?**  
A: Increase your memory request using `#SBATCH --mem=4G` or analyze your script for memory leaks.

**Q: How do I run a job array?**  
A: Add `#SBATCH --array=1-10` in your script. Each task will run independently with its own `$SLURM_ARRAY_TASK_ID`.

**Q: What is the best way to test a script before full submission?**  
A: Run an interactive session using `salloc` or test with smaller inputs and shorter time limits.

**Q: Can I automate job submissions?**  
A: Yes, using loops or shell scripts that call `sbatch`. Example:

```bash
for i in {1..10}; do
  sbatch myjob.sh $i
done
```

**Q: How do I check cluster usage?**  
A: Use `sinfo` to see partitions and node states. Some clusters may also have a web dashboard or monitoring tools.