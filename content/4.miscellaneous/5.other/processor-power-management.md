---
title: Processor Power Management
description: A Windows setting which can sometimes artificially limit your CPU's performance
navigation:
  icon:
seo:
  title: Processor Power Management
  description: A Windows setting which can sometimes artificially limit your CPU's performance.
---

::note
This article is specific to Windows Operating Systems and does not have a clear macOS analogue.
::
 
 
### Change the Windows Power Plan

::steps{level="4"}
#### Search Windows for `Edit power plan`.
#### When the Control Panel item with that name appears, click on it.
#### Click on `Change advanced power settings`.
#### Find the `Processor power management` entry.
::note
You may need to click on it one or two times to expand it.
::
#### Set the `Maximum processor state` setting to `100%`.
#### Set the `Minimum processor state` setting to `100%`.
::warning
If playing on a laptop, you may wish to revert this setting after testing, as it will drain your battery more quickly.
::
#### Click on :kbd{value="Apply"} and then click :kbd{value="OK"}.
::