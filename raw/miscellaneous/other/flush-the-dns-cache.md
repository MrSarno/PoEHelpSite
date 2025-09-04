# Flush the DNS Cache

> Step-by-step instructions on how to flush the DNS cache

<tip>

Flushing the DNS cache can resolve certain connectivity issues.

</tip>

<tabs className="w-full">
<tabs-item icon="i-lucide-grid-2x2" label="Windows">
<steps level="4">

#### Search Windows for `cmd`.

#### Right-click on `Command Prompt` when it appears.

#### Choose `Run as administrator`.

<note>

You may be prompted to confirm this decision. This is normal.

</note>

#### Enter the following command: `ipconfig /flushdns`

</steps>
</tabs-item>

<tabs-item icon="i-lucide-apple" label="macOS">
<steps level="4">

#### Open the Terminal.

#### Enter the following command

```bash [Terminal]
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

#### Close the Terminal window

<tip>

It is normal not to get any response to the above command; this is a sign it has been entered correctly.

</tip>
</steps>
</tabs-item>
</tabs>
