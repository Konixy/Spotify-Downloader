const builder = require('electron-builder');

console.log(builder.Platform.current.name);
builder.build({
  config: {
    icon: `assets/logo.${
      builder.Platform.current().name === 'macos' ? 'icns' : 'ico'
    }`,
    productName: 'Spotify Downloader',
    appId: 'fr.nightcorp.spotifydownloader',
    asar: true,
    asarUnpack: '**\\*.{node,dll}',
    files: ['dist', 'node_modules', 'package.json'],
    afterSign: '.erb/scripts/notarize.js',
    mac: {
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
      backgroundColor: 'red',
    },
    win: {
      target: ['nsis'],
    },
    linux: {
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

// "build": {
//   "productName": "ElectronReact",
//   "appId": "org.erb.ElectronReact",
//   "asar": true,
//   "asarUnpack": "**\\*.{node,dll}",
//   "files": [
//     "dist",
//     "node_modules",
//     "package.json"
//   ],
//   "afterSign": ".erb/scripts/notarize.js",
//   "mac": {
//     "target": {
//       "target": "default",
//       "arch": [
//         "arm64",
//         "x64"
//       ]
//     },
//     "type": "distribution",
//     "hardenedRuntime": true,
//     "entitlements": "assets/entitlements.mac.plist",
//     "entitlementsInherit": "assets/entitlements.mac.plist",
//     "gatekeeperAssess": false
//   },
//   "dmg": {
//     "contents": [
//       {
//         "x": 130,
//         "y": 220
//       },
//       {
//         "x": 410,
//         "y": 220,
//         "type": "link",
//         "path": "/Applications"
//       }
//     ]
//   },
//   "win": {
//     "target": [
//       "nsis"
//     ]
//   },
//   "linux": {
//     "target": [
//       "AppImage"
//     ],
//     "category": "Development"
//   },
//   "directories": {
//     "app": "release/app",
//     "buildResources": "assets",
//     "output": "release/build"
//   },
//   "extraResources": [
//     "./assets/**"
//   ],
//   "publish": {
//     "provider": "github",
//     "owner": "electron-react-boilerplate",
//     "repo": "electron-react-boilerplate"
//   }
// },
