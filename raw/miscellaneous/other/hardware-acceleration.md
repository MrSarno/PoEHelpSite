# Hardware Acceleration

> Preventing web browsers from competing with PoE for your GPU's resources

Hardware Acceleration allows your browser to utilise your GPU to speed up rendering.

Unfortunately, when playing intense or poorly optimised games on your computer, a web browser placing a sustained workload on your video card can adversely impact your framerate. In addition, depending on your driver version your GPU's clock speeds may behave unpredictably while you are both gaming and using a web browser which has Hardware Acceleration enabled.

Thus, as a troubleshooting step it is recommended that you consider disabling Hardware Acceleration.

The steps for doing so on some common web browsers can be found below.

## Browsers

### Chrome

1. Enter `chrome://settings/?search=acceleration` into your browser's address bar
2. Toggle off `Use graphics acceleration when available`
3. Restart Chrome

### Edge

1. Enter `edge://settings/system/manageSystem#GraphicsAcceleration&1` into your browser's address bar
2. Toggle off `Use graphics acceleration when available`
3. Restart Edge

### Firefox

1. Enter `about:preferences` into your browser's address bar
2. Scroll down to the "Performance" section
3. Untick `Use hardware acceleration when available`
4. Restart Firefox

### Opera

1. Enter `opera://settings/?search=acceleration` into your browser's address bar
2. Toggle off `Use graphics acceleration when available`
3. Restart Opera

### Orion

<warning>

There is no known method of doing this in Orion. As a Sarfari-based browser, it likely lacks the option.

</warning>

### Safari

<caution>

In macOS 10.15 Catalina the option to disable Hardware Acceleration was removed from Safari.

</caution>

### Vivaldi

1. Enter `vivaldi:settings/webpages/` into your browser's address bar
2. Untick `Use Hardware Acceleration when Available`
3. Restart Vivaldi
