# Server Connection

> Testing your connection to a Path of Exile server

## Determine the MTR target

This guide can be followed for testing your connection to an authentication server, a web server, an instance server, or more besides. Before running any tests, we need to determine what *to* test.

<accordion>
<accordion-item icon="i-lucide-circle-help" label="Not able to access their website? Click here.">

When you see REPLACEME in the next section of the article, use `www.pathofexile.com`

</accordion-item>

<accordion-item icon="i-lucide-circle-help" label="Having difficulty installing or updating the game? Click here.">

When you see REPLACEME in the next section of the article, use `patchcdn.pathofexile.com`

</accordion-item>

<accordion-item icon="i-lucide-circle-help" label="Unable to log into the game client? Click here.">

What you should use in place of REPLACEME in the next section of the guide depends on the gateway you're trying to use. Please refer to the table below.

<tip>

Most begin with *three letters* followed by *two numbers*. Don't mistake the letter `l` for the number `1`.

</tip>

<table>
<thead>
  <tr>
    <th>
      Gateway
    </th>
    
    <th>
      Use in place of REPLACEME
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Amsterdam
    </td>
    
    <td>
      <code>
        ams01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Auckland
    </td>
    
    <td>
      <code>
        akl01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Australia
    </td>
    
    <td>
      <code>
        mel01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      California
    </td>
    
    <td>
      <code>
        sjc01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Canada
    </td>
    
    <td>
      <code>
        tor01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Frankfurt
    </td>
    
    <td>
      <code>
        fra01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Japan
    </td>
    
    <td>
      <code>
        tok01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      London
    </td>
    
    <td>
      <code>
        lon01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Milan
    </td>
    
    <td>
      <code>
        mil01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <em>
        <del>
          Moscow
        </del>
      </em>
    </td>
    
    <td>
      This server has been removed. It may or may not be available again in future.
    </td>
  </tr>
  
  <tr>
    <td>
      Paris
    </td>
    
    <td>
      <code>
        par01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      São Paulo
    </td>
    
    <td>
      <code>
        sao01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Singapore
    </td>
    
    <td>
      <code>
        sng01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Stockholm
    </td>
    
    <td>
      <code>
        sto.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      South Africa
    </td>
    
    <td>
      <code>
        zaf01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Texas
    </td>
    
    <td>
      <code>
        dal01.login.pathofexile.com
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      Washington, D.C.
    </td>
    
    <td>
      <code>
        wdc01.login.pathofexile.com
      </code>
    </td>
  </tr>
</tbody>
</table>
</accordion-item>

<accordion-item icon="i-lucide-circle-help" label="Experiencing lag or disconnections while playing? Click here.">

Each time you leave town, or enter a map, you are connecting to an instance server. GGG can have dozens - or even *more* - instance servers housed within the data centre for each gateway.

Helpfully, your game client's [log file](/information/log-file) will tell you the IP address of the server you have connected to - and you can use this for the test. You want to open LatestClient.txt, scroll all the way down to the bottom, and find the most recent line that looks like the following;

> 2025/07/03 01:33:28 43034102 ca3a6b37 <span>
> 
> INFO Client 5644
> 
> </span>
> 
>  Connecting to instance server at 69.41.173.237:6112.

Now, that last bit of punctuation is a colon, not a period - and what follows that is the port number, which isn't a part of the IP address. You want everything prior to the colon, which in this example would be `69.41.173.237`. The test may not work if you include the " **:** 6112 ".

<tip>

Use Ctrl F / CMD F to search the file for "instance server" to make it quicker to find what you're looking for.

</tip>
</accordion-item>
</accordion>

## Install MTR and run the test

<tabs className="w-full">
<tabs-item icon="i-lucide-grid-2x2" label="Windows">

### Install WinMTR

<steps level="4">

#### Download WinMTR

It can be found here: [](https://sourceforge.net/projects/winmtr/)[https://sourceforge.net/projects/winmtr/](https://sourceforge.net/projects/winmtr/)

#### Click the green `Download` button on the left

After a few seconds you may be prompted to allow the download

#### Go to your Downloads folder

`%UserProfile%/Downloads`

<tip>

Copy & paste the above right into File Explorer's address bar!

</tip>

#### Extract the files from the zip archive

- Find `WinMTR-v092.zip`
- Right-click on it
- Click on `Extract All...`
- Click the `Extract` button to confirm

#### Open the `WinMTR-v092` folder

<note>

Depending on your settings, the folder may have opened automatically.

</note>

#### Open the `WinMTR-v092` folder inside that one

#### Open the `WinMTR_x64` folder

</steps>

### Run WinMTR

<steps level="4">

#### Double-click on `WinMTR.exe`

#### In the `Host:` field enter REPLACEME

#### Click the `Start` button

#### Wait until the number in the `Sent` column reaches 500

#### Click the `Stop` button

#### Click the `Copy Text to clipboard` button

</steps>
</tabs-item>

<tabs-item icon="i-lucide-apple" label="macOS">
<note>

This guide assumes you have Homebrew installed. See [here](/miscellaneous/mac/homebrew-install) for a guide on how to install Homebrew.

</note>

<steps level="4">

#### Check whether MTR is installed

```bash [Terminal]
mtr -v
```

<note>

This will either show you the version number of MTR installed on your system, or it will show `mtr: command not found`.

</note>

#### Install MTR

<tip>

Skip this step if the previous step showed you a version number; e.g. `mtr 0.9.5`.

</tip>

```bash [Terminal]
brew install mtr
```

#### Run MTR

```bash [Terminal]
sudo mtr REPLACEME
```

<note>

You will be prompted to enter your password to give MTR the permissions it requires to run.

</note>

#### Copy the information

<warning>

The number in the `Snt` column will slowly increment. Wait until it reaches **500**.

</warning>

In the menu bar, click on `Edit` and then `Select All`. Then click `Edit` again, and click `Copy`.

#### Paste it into a forum post

Now that you've copied the test, you can paste it into a forum post!

<tip>

First describe your issue, then click on the forum's `Quote` button, and *then* paste your MTR results.

</tip>
</steps>
</tabs-item>
</tabs>
