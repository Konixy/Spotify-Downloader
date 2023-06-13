const builder = require('electron-builder');

builder.build({
  config: {
    productName: 'Spotify Downloader',
    appId: 'fr.nightcorp.spotifydownloader',
    asar: true,
    asarUnpack: '**\\*.{node,dll}',
    files: ['dist', 'node_modules', 'package.json'],
    afterSign: '.erb/scripts/notarize.js',
    mac: {
      icon: 'assets/icon.icns',
      target: {
        target: 'default',
        arch: ['arm64', 'x64'],
      },
      type: 'distribution',
      hardenedRuntime: true,
      entitlements: 'assets/entitlements.mac.plist',
      entitlementsInherit: 'assets/entitlements.mac.plist',
      gatekeeperAssess: false,
    },
    dmg: {
      contents: [
        {
          x: 130,
          y: 220,
        },
        {
          x: 410,
          y: 220,
          type: 'link',
          path: '/Applications',
        },
      ],
      background: 'assets/dmg-background.png',
      title: '${productName}',
      window: {
        height: 600,
        width: 1000,
      },
      icon: 'assets/dmg-icon.icns',
    },
    win: {
      icon: 'assets/icon.ico',
      target: ['nsis'],
      appId: 'NightCorp.SpotifyDownloader',
    },
    linux: {
      icon: 'assets/icon.png',
      target: ['AppImage'],
      category: 'Development',
    },
    directories: {
      app: 'release/app',
      buildResources: 'assets',
      output: 'release/build',
    },
    extraResources: ['./assets/**'],
  },
});
