---
title: Wireless Adapter Power Savings
description: A Windows setting which can sometimes induce regular WiFi micro-drops
navigation:
  icon:
seo:
  title: Wireless Adapter Power Savings
  description: A Windows setting which can sometimes induce regular WiFi micro-drops.
---

::tip
There are two sets of instructions below - it is recommended that you follow both.
::
 
 
### Change the Windows Power Plan

::steps{level="4"}
#### Search Windows for `Edit power plan`.
#### When the Control Panel item with that name appears, click on it.
#### Click on `Change advanced power settings`.
#### Find the `Wireless Adapter Settings` entry.
::note
You may need to click on it one or two times to expand it.
::
#### Under "Power Saving Mode" set the setting to `Maximum Performance`.
#### Click on :kbd{value="Apply"} and then click :kbd{value="OK"}.
::
 
 
### Configure Device Manager

::steps{level="4"}
#### Search Windows for `Device Manager`.
#### When the Control Panel item with that name appears, click on it.
#### Click on `Network adapters`.
#### Find your WiFi adapter and right-click on it.
::tip
Its name will most likely contain `WiFi`, `Wi-Fi`, or `Wireless`.
::
#### Under "Power Saving Mode" set the setting to `Maximum Performance`.
#### Click on :kbd{value="Properties"}.
#### Switch to the `Power Management` tab.
#### Untick the `Allow the computer to turn off this device to save power` box.
#### Click :kbd{value="OK"}.
::