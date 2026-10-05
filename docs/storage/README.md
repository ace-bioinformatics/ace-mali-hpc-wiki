# Storage and Quota Troubleshooting

This section provides guidance for managing storage and troubleshooting common storage and quota-related issues on the ACE Mali HPC.

## Storage Overview

ACE Mali HPC provides different storage areas for user files, project data, and temporary computational data.

Users should manage their storage carefully and regularly remove unnecessary files and terminated job artifacts.

Computational analyses should be performed in the designated temporary or scratch storage area rather than in the user's home directory.

## Checking Your Current Location

To display your current working directory:

```bash
pwd
```

To view files and directories:

```bash
ls -lh
```

## Checking Disk Usage

To check the size of files and directories in your current directory:

```bash
du -sh *
```

To check the total size of a specific directory:

```bash
du -sh DIRECTORY_NAME
```

To check available space on mounted filesystems:

```bash
df -h
```

## Home Directory Storage

Each HPC user has a home directory.

The storage allocation for HPC user home directories is:

- **Default quota:** 50 GB per user
- **Maximum quota:** Up to 200 GB with an approved request and valid justification

To display your home directory:

```bash
echo $HOME
```

To check whether your home directory is accessible:

```bash
ls -ld $HOME
```

Users should avoid using their home directories for computational analyses and large intermediate files. Analysis should be performed in the designated temporary or scratch storage area.

## Project Directory Storage

Projects are allocated separate storage space.

The storage allocation for project directories is:

- **Default quota:** 1 TB per project
- **Maximum quota:** Up to 5 TB with an approved request and valid justification

Projects requiring storage beyond the default allocation must submit a formal request to the HPC administration team.

## Temporary and Scratch Storage

Users should use the designated temporary or scratch storage area for computational analyses and temporary analysis files.

Temporary storage may be used for:

- Analysis working directories
- Intermediate analysis files
- Temporary computational output
- Data required during HPC jobs

Data stored in temporary storage areas is subject to the ACE Mali HPC clean-up policy.

**Data that has been inactive for 30 days will be systematically deleted from temporary storage.**

Users should therefore move important results and files that need to be retained to an appropriate permanent storage location.

## Storage Usage and Clean-up

Users are responsible for managing their allocated storage.

Good practices include:

- Regularly checking storage usage
- Removing unnecessary temporary files
- Removing terminated job artifacts that are no longer required
- Avoiding unnecessary duplicate files
- Moving important results out of temporary storage
- Planning storage requirements before beginning large projects

## Storage Quota Warnings

Users will be notified when their storage consumption reaches **90% of their allocated quota**.

Users receiving a quota warning should review their files and remove or relocate unnecessary data before reaching their storage limit.

## What Happens if I Exceed My Quota?

If a user or project exceeds its allocated storage quota, **write access may be temporarily revoked**.

Write privileges will be restored after the user or project team reduces its stored data to comply with the assigned quota.

If you believe you have exceeded your quota, review your storage usage and remove unnecessary files.

If additional storage is required, submit a request to the HPC administration team.

## Requesting Additional Storage

Users or projects requiring storage beyond the default quota must submit a formal request to the HPC administration team.

The request should include:

- Justification for the additional storage
- Details of the project requiring additional storage
- Estimated data size
- Duration for which the additional storage is required

The HPC administration team will review the request. If appropriate, it will be forwarded to the Center Director for final approval.

To request additional storage, contact:

**Email:** [support@ace-bioinformatics.org](mailto:support@ace-bioinformatics.org)

## Common Storage Problems

### I cannot write to a directory

Check that:

- The directory exists.
- The path is correct.
- You have write permission.
- The filesystem is available.
- You have not exceeded your allocated storage quota.

Check the directory using:

```bash
ls -ld DIRECTORY_NAME
```

### My job cannot access my files

Verify that:

- The input file exists.
- The path specified in the job script is correct.
- You have permission to access the file.
- The compute node can access the directory.

If the files are accessible from the login node but not from the compute node, contact HPC support.

### I receive "No space left on device"

Check available filesystem space:

```bash
df -h
```

Check the size of your files and directories:

```bash
du -sh *
```

Remove unnecessary files where appropriate.

If the problem continues, contact HPC support.

### I receive "Permission denied"

Check the permissions of the affected file:

```bash
ls -l FILE_NAME
```

For a directory:

```bash
ls -ld DIRECTORY_NAME
```

If you do not have the required access, contact the owner of the data or the HPC support team.

## Reporting a Storage Problem

If you cannot resolve a storage or quota problem, contact the ACE Mali HPC support team:

**Email:** [support@ace-bioinformatics.org](mailto:support@ace-bioinformatics.org)

When reporting a problem, provide:

- Your username
- The affected directory or storage area
- The error message
- Job ID, if the problem occurred during a SLURM job
- A brief description of the problem

Do not include your password or other credentials in a support request.

## Related Documentation

For job-related problems, see the [SLURM Job Submission and Troubleshooting](../slurm/README.md) section.

For account and home directory access problems, see the [Accounts and Login](../accounts-login/README.md) section.

For additional HPC issues, see the [Troubleshooting](../troubleshooting/README.md) section.