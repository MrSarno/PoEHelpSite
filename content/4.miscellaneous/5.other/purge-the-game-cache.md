---
title: Purge the Game Cache
description: How to purge the Path of Exile client's cache
navigation:
  icon:
seo:
  title: Purge the Game Cache
  description: How to purge the Path of Exile client's cache
---

::note
Deleting the game client's cache is a common troubleshooting step.
::

::tabs{.w-full}
:::tabs-item{icon="i-lucide-grid-2x2" label="Windows"}
### Location
::tip
Copy & paste the below right into File Explorer's address bar!
::
`%AppData%\Path of Exile`
 
 
### Files and Folders to Delete
You should have one or more folders with `Cache` in their name - delete all of them.
:::
:::tabs-item{icon="i-lucide-apple" label="macOS"}
### Location
::tip
Can't find the _Library_ folder? Open Finder, click on :icon{name="i-lucide-circle-ellipsis"}, click on `Show View Options` and tick `Show Library Folder`.
::
`~/Library/Caches/com.GGG.PathOfExile`
 
 
### Files and Folders to Delete

#### Files
- `Cache.db`
- `Cache.db-shm`
- `Cache.db-wal`

#### Folders
- `DailyDealCache`
- `fsCachedData`
- `MOTDCache`
- `ShaderCacheVulkan`
:::
::