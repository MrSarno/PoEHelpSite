---
title: Hardware Acceleration
description: Preventing web browsers from competing with PoE for your GPU's resources
navigation:
  icon:
seo:
  title: Hardware Acceleration
  description: Preventing web browsers from competing with PoE for your GPU's resources.
---

Hardware Acceleration allows your browser to utilise your GPU to speed up rendering.

Unfortunately, when playing intense or poorly optimised games on your computer, a web browser placing a sustained workload on your video card can adversely impact your framerate. In addition, depending on your driver version your GPU's clock speeds may behave unpredictably while you are both gaming and using a web browser which has Hardware Acceleration enabled.

Thus, as a troubleshooting step it is recommended that you consider disabling Hardware Acceleration.

The steps for doing so on some common web browsers can be found below.

## Browsers

### Chrome

- Enter `chrome://settings/?search=acceleration` into your browser's address bar
- Toggle off `Use graphics acceleration when available`
- Restart Chrome

### Edge

- Enter `edge://settings/system/manageSystem#GraphicsAcceleration&1` into your browser's address bar
- Toggle off `Use graphics acceleration when available`
- Restart Edge

### Firefox

- Enter `about:preferences` into your browser's address bar
- Scroll down to the "Performance" section
- Untick `Use hardware acceleration when available`
- Restart Firefox

### Opera

- Enter `opera://settings/?search=acceleration` into your browser's address bar
- Toggle off `Use graphics acceleration when available`
- Restart Opera

### Orion

::warning
I have been unable to find a way to do this. As a Safari-based web browser, I assume it isn't possible.
::

### Safari

::caution
In macOS 10.15 Catalina the option to disable Hardware Acceleration was removed from Safari.
::

### Vivaldi

- Enter `vivaldi:settings/webpages/` into your browser's address bar
- Untick `Use Hardware Acceleration when Available`
- Restart Vivaldi