# Error: Failed writing received data to disk/application while downloading

> Troubleshooting this Path of Exile connection failure error message

<note>

This error message is sometimes caused by server-side issues which you will need to wait for GGG to fix.

</note>

<steps level="4">

#### Check for free space

Verify your SSD has sufficient space for the patching process to complete.

#### Try running the launcher with elevated privileges

<note>

This troubleshooting is only relevant on Windows-based devices.

</note>

Try closing the launcher, then right-clicking on the file and selecting `Run as administrator`.

#### Try running `PackCheck.exe` or verifying your client's files through Steam / the Epic Games Launcher

<caution>

This step is not available for users of the standalone client on macOS. You may need to reinstall the game instead.

</caution>

Try [Repairing the Client](/miscellaneous/other/repair-the-client).

#### Try using a VPN

If the issue is on-route, a VPN altering how your traffic gets routed can work around the problem.

`ProtonVPN` is an example of a trusted VPN service with a free plan which you can use for testing.

#### Deleting certain client files

<warning>

If trying this, ensure you do not delete the `content.ggpk` file.

</warning>

Deleting the `.dll` and `.exe` files in the client's install folder, then running the launcher again, may fix the issue.

</steps>
