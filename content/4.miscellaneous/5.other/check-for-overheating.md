---
title: Check for Overheating
description: How to check for signs of your CPU or graphics card overheating
navigation:
  icon:
seo:
  title: Check for Overheating
  description: How to check for signs of your CPU or graphics card overheating.
---

Your processor or video card overheating is not only capable of causing short-term harm to your system's performance - it can result in permanent physical damage being inflicted on your computer.

::tabs{.w-full}
  :::tabs-item{icon="i-lucide-grid-2x2" label="Windows"}
::tip
HWMonitor displays current values, minimum values, and maximum values. Open it before playing!
::
    ::steps{level="4"}
#### Download and install HWMonitor
      ::tip
Ensure you click on the `SETUP · ENGLISH` button on the left; not the `TRY HWMONITOR PRO !` button on the right.
      ::
The final step of the setup wizard offers to display a `hwm_readme.txt`. You can untick this or just close it after it opens.
#### Grant HWMonitor elevated privileges if requested
      ::note
HWMonitor may require additional permissions to access temperature readings and the like. This is normal.
      ::
#### Run HWMonitor in the background while you play
When you're finished gaming, either look at the temperature values yourself, or [Create a Thread in Technical Support](/miscellaneous/other/create-a-thread-in-technical-support) and show us screenshots of its output.
    ::
  :::
  :::tabs-item{icon="i-lucide-apple" label="macOS"}
::note
This guide assumes you have Homebrew installed. See [here](/miscellaneous/mac/homebrew-install) for a guide on how to install Homebrew.
::
    ::steps{level="4"}
#### Open the Terminal.
#### Enter the following command
  ```bash [Terminal]
  brew install --cask stats
  ```
#### Open Stats
      ::note
Stats is a free graphical application. Search for it using Spotlight or open it through Launchpad.
      ::
#### Navigate through the first time set-up
#### Stats should now be displaying output in the menubar
      ::tip
Click on the CPU utilisation percentage to see a pop-up, which includes a temperature reading in the top-left corner.
      ::
    ::
  :::
::
### Further Help

Not sure what to make of what you're looking at?

[Create a Thread in Technical Support](/miscellaneous/other/create-a-thread-in-technical-support) and someone can analyse it for you.