# Web HID Visualizer

This project aims to be a zero-install version of the great tool [hidviz](https://hidviz.org/) by making use of the USB HID interface capabilities of modern web browsers.  Current funcitonality is limited, but it is able to enumerate some devices as a proof of concept.

I just need to find the time to finish this off!

## How its implemented

I wanted to make use of modern web techniques for this project, so it is making use of

- Typescript to ensure strongly typed javascript is used
- Web Components through use of [Lit](https://lit.dev)

So long as you have negotiated access to the USB device already, you should be able to add the the component directly to your site with

```html
<hid-device vendorid='12345' productid='54321'></hid-device>"

```

See the example code to see how to negotiate access to the HID devices through use of

```javascript
navigator.hid.requestDevice(...)
```

## Browser support

You can check the latest broser support [here](https://caniuse.com/webhid).

At the time of writing, the latest Edge, Chrome and Opera broswers support this feature.

## Building

Install the development dependencies

```bash
# First time build requires installation of dependencies
npm install
# Build the output bundle (-w watches for source changes and rebuilds)
npm run watch
# If you just want a single shot build, use 'npm run build'
```

Then you are ready to serve the index.html file using the http server of your choice... but...

## [WEBHid](https://wicg.github.io/webhid/) requires use of https://

The use of ```navigator.hid``` requires that the page is served from a trusted https server.  For development use, this means that you need to have an https server with trusted certificate setup.

To achieve this, I made use of ```mkcert```.

Once the cert is created, I used the vscode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to publih the content locally.

My ```.vscode/settings.json``` configuration for liveServer is:

```
{
    "liveServer.settings.host": "localhost",
    "liveServer.settings.port": 5501,
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.https": {
      "enable": true,
      "cert": "<< PATH TO localhost.pem >>",
      "key": "<< PATH TO localhost-key.pem >>",
      "passphrase": "<< PASSPHRASE >>"
    }
  }
```

Repalce the items in << >> with the details you created using ```mkcert```.


## TODO

- [ ] Publish to github pages 
- [ ] Add full decode to hidDecode.ts
- [ ] Improve visual presentation