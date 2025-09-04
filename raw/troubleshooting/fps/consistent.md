# Low But Steady FPS

> Troubleshooting a framerate that is stable, but is never as high as expected

<tip>

Test your in-game performance after trying each of the steps listed below.

</tip>

<steps level="4">

#### Enable `Triple Buffering`

<note>

This can be found in the `Graphics` tab of the game's options.

</note>

#### Disable Vertical Sync

<note>

This is referred to as `VSync` in the Path of Exile game client.

</note>

#### Check your `Foreground FPS` setting

#### Configure your Operating System's CPU power management

<note>

This article is specific to Windows and does not have a clear macOS analogue.

</note>

Set your [Processor Power Management](/miscellaneous/other/processor-power-management) to never reduce your CPU's state below 100%.

#### Check your `Background FPS` setting

<tip>

This shouldn't be relevant while you are playing, but in case of possible bugs it's worth changing the setting.

</tip>

#### Check whether any frame limiting-software is running

Tools such as AMD Radeon Chill, NVIDIA Control Panel, and RivaTuner can potentially impose FPS caps.

#### Disable any Adaptive Sync features

For testing purposes, try disabling G-Sync or FreeSync.

#### Check whether Windows has reset your monitor's refresh rate as part of a recent update

If your high refresh rate monitor has been capped to 60 Hz, your FPS may seem lower than you are used to.

</steps>
