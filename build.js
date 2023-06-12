var packager = require("electron-packager");
var options = {
  arch: "x64",
  platform: process.platform,// this will automatically select darwin if darwin or win32 if win32
  dir: "./", // which directory to pack
  "app-copyright": "NightCorp",// fill this
  "app-version": "0.0.1",
  asar: true, // this will archive your source code.
  icon: "./logo.ico",
  name: "Spotify-Downloader", // fill this
  ignore: [],
  out: `./build/${process.platform === "win32" ? "windows" : process.platform === "darwin" ? "mac" : "linux"}`,
  overwrite: true, // will overwrite whatever it might have written before.
  prune: true,
  version: "0.0.1",
  "version-string": {
    CompanyName: "NightCorp",// fill this
    FileDescription:
      "Program that help you download spotify songs and playlists" /*This is what display windows on task manager, shortcut and process*/,
    OriginalFilename: "",// fill this
    ProductName: "Spotify-Downloader",// fill this
    InternalName: "",// fill this
  },
};
packager(options, function done_callback(err, appPaths) {
  console.log(err);
  console.log(appPaths);
});
