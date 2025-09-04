---
title: Flush the DNS Cache
description: Step-by-step instructions on how to flush the DNS cache
navigation:
  icon:
seo:
  title: Flush the DNS Cache
  description: Step-by-step instructions on how to flush the DNS cache.
---

::tabs{.w-full}
:::tabs-item{icon="i-lucide-grid-2x2" label="Windows"}
::steps{level="4"}
#### Search Windows for `cmd`.
#### Right-click on `Command Prompt` when it appears.
#### Choose `Run as administrator`.
::note
You may be prompted to confirm this decision. This is normal.
::
#### Enter the following command.
`ipconfig /flushdns`
::
:::
:::tabs-item{icon="i-lucide-apple" label="macOS"}


::steps{level="4"}
#### Open the Terminal.
#### Enter the following command
  ```bash [Terminal]
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  ```
#### Close the Terminal window
::tip
It is normal not to get any response to the above command; this is a sign it has been entered correctly.
::
:::
::