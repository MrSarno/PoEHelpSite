---
title: Scan for Disk Errors
description: Have your OS scan your drive to find bad sectors and other errors
navigation:
  icon:
seo:
  title: Scan for Disk Errors
  description: Have your OS examine your to find bad sectors and other errors.
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
#### Enter the following command: `CHKDSK /r`
#### Restart your computer when you are ready for the check to be performed.
    ::
  :::
  :::tabs-item{icon="i-lucide-apple" label="macOS"}
  ::steps{level="4"}
#### Open Disk Utility
#### In the menubar, click on `View` > `Show All Devices`
#### Select each listed device in the `Internal` section one at a time and click on `First Aid`
::warning
Running First Aid on your startup drive will temporarily make your Mac unusable until the process finishes.
::
    ::
  :::
::