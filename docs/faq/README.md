# Frequently Asked Questions (FAQ)

This page provides answers to common questions about accessing and using the ACE Mali HPC environment.

## Access and Login

### How do I access the ACE Mali HPC?

Users must have an authorized HPC account before accessing the system. Once an account is available, users can connect using the access method provided by the ACE Mali HPC team.

### What should I do if I cannot log in?

First, confirm that you are using the correct username and connection information. If the problem persists, contact the HPC support team.

## SLURM Jobs

### How do I submit a job?

HPC jobs should be submitted to the compute nodes using SLURM.

```bash
sbatch my_job.sh
```

### How do I check the status of my jobs?

Use:

```bash
squeue -u $USER
```

Common job states include:

- R – Running
- PD – Pending

### How do I cancel a job?

Use:

```bash
scancel JOB_ID
```

Replace JOB_ID with your SLURM job ID.

### Should I run analysis directly on the login/head node?

No. Computational workloads should be submitted to the compute nodes through SLURM.

## Compute Nodes

### How do I check the status of the compute nodes?

Use:

```bash
sinfo -N -l
```

For detailed information about a particular node:

```bash
scontrol show node NODE_NAME
```

## Software

### How do I see which software modules are available?

Use:

```bash
module avail
```

To see currently loaded modules:

```bash
module list
```

### Can I use Conda environments?

Yes. Conda environments can be used for software and analysis environments where appropriate.

For example, after loading Anaconda:

```bash
module load anaconda/2021.05
conda env list
conda activate ENVIRONMENT_NAME
```

## Files and Storage

### What should I do if my job cannot access a file?

Check that:

- The file path is correct.
- The file exists.
- You have permission to access the file.
- The directory is accessible from the compute node.

If the file is accessible from the login node but not from a compute node, contact HPC support.

## Troubleshooting

### What should I do if my job fails?

Start by checking the SLURM output and error messages.

You should also verify:

- Input file paths
- Required software or Conda environment
- Requested resources
- File and directory permissions
- Storage availability

More detailed instructions will be available in the [Troubleshooting](../troubleshooting/README.md) section.

## Support

### Who should I contact if I still need help?

If you cannot resolve the problem using this knowledge base, contact the ACE Mali HPC support team and provide:

- Your username
- Job ID, if applicable
- Error message
- Command or script used
- Brief description of the problem
