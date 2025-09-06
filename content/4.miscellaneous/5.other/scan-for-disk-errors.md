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
#### Restart your computer when you are ready for the check to be performed
    ::
  :::
  :::tabs-item{icon="i-lucide-apple" label="macOS"}
    ::warning
macOS-specific troubleshooting is currently being worked on for this.
    ::
Please view Apple's page for repairing Mac storage devices <a href="https://support.apple.com/en-us/102611" target="_blank" rel="noopener noreferrer">here</a>.
  :::
::