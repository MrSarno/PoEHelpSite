---
title: "Error: Failed writing received data to disk/application while downloading"
description: Troubleshooting this Path of Exile connection failure error message
navigation:
  icon:
seo:
  title: "Error: Failed writing received data to disk/application while downloading"
  description: Troubleshooting this Path of Exile connection failure error message.
---

::note
This error message is sometimes caused by server-side issues which you will need to wait for GGG to fix.
::

::steps{level="4"}
#### Check for free space
Verify your SSD has sufficient space for the patching process to complete.
#### Try running `PackCheck.exe` or verifying your client's files through Steam / the Epic Games Launcher
::caution
This step is not available for users of the standalone client on macOS. You may need to reinstall the game instead.
::
Try [Repairing the Client](/miscellaneous/other/repair-the-client) as a first step.
#### Try using a VPN
If the issue is on-route, a VPN altering how your traffic gets routed can work around the problem.

`ProtonVPN` is an example of a trusted VPN service with a free plan which you can use for testing.
#### Deleting certain client files
::warning
If trying this, ensure you do not delete the `content.ggpk` file.
::
Deleting the `.dll` and `.exe` files in the client's install folder, then running the launcher again, may fix the issue.
::