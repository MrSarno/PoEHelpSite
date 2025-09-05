# Check for Overheating

> How to check for signs of your CPU or graphics card overheating

Your processor or video card overheating is not only capable of causing short-term harm to your system's performance - it can result in permanent physical damage being inflicted on your computer.

If you believe your CPU or video card may be overheating, follow the steps below to investigate that possibility;

<tabs className="w-full">
<tabs-item icon="i-lucide-grid-2x2" label="Windows">
<steps level="4">
<tip>

HWMonitor displays current values, minimum values, and maximum values. Open it before you start playing!

</tip>

#### Download and install HWMonitor

<tip>

Ensure you click on the `SETUP · ENGLISH` button on the left; not the `TRY HWMONITOR PRO !` button on the right.

</tip>

The final step of the setup wizard offers to display a `hwm_readme.txt`. You can untick this or just close it after it opens.

#### Grant HWMonitor elevated privileges if requested

<note>

HWMonitor may require additional permissions to access temperature readings and the like. This is normal.

</note>

#### Run HWMonitor in the background while you play

When you're finished gaming, either look at the temperature values yourself, or [Create a Thread in Technical Support](/miscellaneous/other/create-a-thread-in-technical-support) and show us screenshots of its output.

</steps>
</tabs-item>

<tabs-item icon="i-lucide-apple" label="macOS">
<steps level="4">
<note>

This guide assumes you have Homebrew installed. See [here](/miscellaneous/mac/homebrew-install) for a guide on how to install Homebrew.

</note>

#### Open the Terminal.

#### Enter the following command

```bash [Terminal]
brew install --cask stats
```

#### Open Stats

<note>

Stats is a free graphical application. Search for it using Spotlight or open it through Launchpad.

</note>

#### Navigate through the first time set-up

#### Stats should now be displaying output in the menubar

<tip>

Click on the CPU utilisation percentage to see a pop-up, which includes a temperature reading in the top-left corner.

</tip>
</steps>
</tabs-item>
</tabs>

### Further Help

Not sure what to make of what you're looking at?

[Create a Thread in Technical Support](/miscellaneous/other/create-a-thread-in-technical-support) and someone can analyse it for you.
