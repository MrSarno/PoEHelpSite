# Could Not Overwrite Executable

> Troubleshooting this Path of Exile error message

<note>

This error message is only known to occur on Windows-based devices. Thus, troubleshooting focuses on that OS.

</note>

This permissions-based error can crop up late in the process of patching the standalone client.

## The Most Common Workaround

<note>

It is advisable to restart your computer before following the below instructions.

</note>

<steps level="4">

#### Go to your Path of Exile install directory

The default location is `%ProgramFiles(x86)%\Grinding Gear Games\Path of Exile`

<tip>

Copy and paste the above into File Explorer's address bar!

</tip>

#### Look for a `PathOfExile.tmp` file

#### If you can find one, delete the file called `PathOfExile.exe`

<warning>

Do not delete the file with ".tmp" at the end!

</warning>

#### Rename the `PathOfExile.tmp` file so that it ends in ".exe" instead

</steps>

## Other Troubleshooting

If the above steps don't work, try the troubleshooting below.

<steps level="4">

#### Close the game's launcher

#### Find your `release` folder

The default location for it is in `%UserProfile%\Documents\My Games\Path of Exile`

<tip>

Copy and paste the above into File Explorer's address bar!

</tip>

#### Delete the release folder

#### Run the launcher again

</steps>
