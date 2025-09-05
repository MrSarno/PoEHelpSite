# Purge the Game Cache

> How to purge the Path of Exile client's cache

<note>

Deleting the game client's cache is a common troubleshooting step.

</note>

<tabs className="w-full">
<tabs-item icon="i-lucide-grid-2x2" label="Windows">

## Location

<tip>

Copy & paste the below right into File Explorer's address bar!

</tip>

`%AppData%\Path of Exile`

## Files and Folders to Delete

You should have one or more folders with `Cache` in their name - delete all of them.

</tabs-item>

<tabs-item icon="i-lucide-apple" label="macOS">

## Location

<tip>

Can't find the *Library* folder? Open Finder, click on <icon name="i-lucide-circle-ellipsis">



</icon>

, click on `Show View Options` and tick `Show Library Folder`.

</tip>

`~/Library/Caches/com.GGG.PathOfExile`

## Files and Folders to Delete

### Files

- `Cache.db`
- `Cache.db-shm`
- `Cache.db-wal`

### Folders

- `DailyDealCache`
- `fsCachedData`
- `MOTDCache`
- `ShaderCacheVulkan`

</tabs-item>
</tabs>
