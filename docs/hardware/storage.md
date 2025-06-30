---
id: storage
title: Storage Systems
---

The ACE HPC Cluster provides multiple storage options for users.

### File Systems
| Name      | Path             | Size  | Quota       | Purpose              |
|-----------|------------------|-------|-------------|----------------------|
| Home      | `/home/$USER`    | 37 GB | 50 GB/user  | Personal files       |
| Root      | `/`              | 180 GB| System use  | Operating system     |
| ace-data1 | `/etc/ace-data`  | 190 TB| Shared      | Large shared storage |

### Policies
- **Home**: Backed up daily; not for large datasets.
- **ace-data1**: Shared space; manage usage responsibly.
- **Root**: Reserved for system files—do not store data here.

### Usage Tips
- Use ace-data1 for large datasets and shared project files.
- Keep Home for lightweight, personal scripts or configs.
