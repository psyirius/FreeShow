// const { ValidChannels, Data } = require("./src/types/Channels")
import { app, BrowserWindow, ipcMain, dialog, desktopCapturer } from "electron"
import { join } from "path"
import { URL } from "url"
// import path from "path"
// import fs from "fs"
import electronSettings from "./utils/settings"
import checkForUpdates from "./utils/updater"
// import express from express();
// import express from "./server/connection")

// WIP: Tray / push notifications
// https://www.webtips.dev/how-to-make-your-very-first-desktop-app-with-electron-and-svelte

const isProd: boolean = process.env.NODE_ENV === "production" || !/[\\/]electron/.exec(process.execPath)

electronSettings.set("loaded", true)
if (!electronSettings.get("loaded")) console.log("Error! Could not get stored data.")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null

app.on("ready", () => {
  createWindow()

  // https://gist.github.com/maximilian-lindsey/a446a7ee87838a62099d
  // const LANserver =
  require("./servers")

  // check for uodates
  if (isProd) checkForUpdates()
})

const createWindow = () => {
  let width: number = electronSettings.get("width")
  let height: number = electronSettings.get("height")
  let maximized: boolean = electronSettings.get("maximized")
  // let { width, height } = store.get("windowBounds")
  // let maximized = store.get("maximized")

  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      devTools: isProd ? false : true,
      // preload: join(__dirname, "preload.js"), // use a preload script
      preload: join(__dirname, "preload"), // use a preload script
      // preload: "./preload",
      contextIsolation: true,
      enableRemoteModule: false,
    },
  })

  const url =
    // process.env.NODE_ENV === "production"
    isProd
      ? // in production, use the statically build version of our application
        `file://${join(__dirname, "public", "index.html")}`
      : // in dev, target the host and port of the local rollup web server
        "http://localhost:3000"

  mainWindow.loadURL(url).catch((err) => {
    console.error(JSON.stringify(err))
    app.quit()
  })
  // mainWindow.loadURL(`file://${join("./", "public", "index.html")}`)
  // mainWindow.loadFile("./public/index.html")
  // mainWindow.loadFile(join(__dirname, "public", "index.html")).catch((err) => {
  //   console.error(JSON.stringify(err))
  //   app.quit()
  // })

  if (!isProd) mainWindow.webContents.openDevTools()

  mainWindow.on("maximize", () => electronSettings.set("maximized", true))
  mainWindow.on("unmaximize", () => electronSettings.set("maximized", false))
  mainWindow.on("resize", () => {
    let { width, height } = mainWindow!.getBounds()
    electronSettings.set("width", width)
    electronSettings.set("height", height)
  })

  if (maximized) mainWindow.maximize()

  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

// those two events are completely optional to subscrbe to, but that's a common way to get the
// user experience people expect to have on macOS: do not quit the application directly
// after the user close the last window, instead wait for Command + Q (or equivalent).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
  if (mainWindow === null) createWindow()
})

app.on("web-contents-created", (e, contents) => {
  console.info(e)
  // Security of webviews
  contents.on("will-attach-webview", (event, webPreferences, params) => {
    console.info(event, params)
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload

    // Disable Node.js integration
    webPreferences.nodeIntegration = false

    // Verify URL being loaded
    // if (!params.src.startsWith(`file://${join(__dirname)}`)) {
    //   event.preventDefault(); // We do not open anything now
    // }
  })

  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedURL = new URL(navigationUrl)
    // In dev mode allow Hot Module Replacement
    if (parsedURL.host !== "localhost:3000" && !isProd) {
      console.warn("Stopped attempt to open: " + navigationUrl)
      event.preventDefault()
    } else if (isProd) {
      console.warn("Stopped attempt to open: " + navigationUrl)
      event.preventDefault()
    }
  })
})

// // First instantiate the class
// const store = new Store({
//   // We'll call our data file 'user-preferences'
//   configName: "storage",
//   defaults: {
//     // 800x600 is the default size of our window
//     windowBounds: { width: 800, height: 600 },
//     maximized: true,
//   },
// })

// app.on("ready", () => {
//   let { width, height } = store.get("windowBounds")
//   let maximized = store.get("maximized")

//   // https://gist.github.com/maximilian-lindsey/a446a7ee87838a62099d
//   // const LANserver =
//   require("./server/connection")

//   mainWindow = new BrowserWindow({
//     width,
//     height,
//     webPreferences: {
//       // preload: `${__dirname}/preload.js`
//       preload: path.join(__dirname, "preload.js"), // use a preload script
//       // nodeIntegration: false, // is default value after Electron v5
//       // contextIsolation: true, // protect against prototype pollution
//       // enableRemoteModule: false, // turn off remote
//       sandbox: true,
//     },
//   })

//   mainWindow.on("maximize", () => store.set("maximized", true))
//   mainWindow.on("unmaximize", () => store.set("maximized", false))
//   mainWindow.on("resize", () => {
//     if (mainWindow) {
//       var { width, height } = mainWindow.getBounds()
//     }
//     store.set("windowBounds", { width, height })
//   })

//   mainWindow.loadFile("./public/index.html")
//   // mainWindow.loadFile(path.join(__dirname, "index.html"));
//   // win.loadFile(path.join(__dirname, "dist/index.html"));
//   mainWindow.webContents.openDevTools()

//   if (maximized) mainWindow.maximize()

//   // https://www.electronjs.org/docs/api/menu
//   // const menu = new Menu();

//   // menu.append(
//   //   new MenuItem({
//   //     label: "Save",
//   //     accelerator: "CmdOrCtrl+S",
//   //     click: () => toApp("savefile"),
//   //   })
//   // );
//   // menu.append(
//   //   new MenuItem({
//   //     label: "Open",
//   //     accelerator: "CmdOrCtrl+O",
//   //     click: openFile,
//   //   })
//   // );
//   // menu.append(
//   //   new MenuItem({
//   //     role: "reload",
//   //     accelerator: "CmdOrCtrl+R",
//   //   })
//   // );

//   // Menu.setApplicationMenu(menu);

//   // ipcMain.on('show-context-menu', (event) => {
//   //   const template = [
//   //     {
//   //       role: 'reload'
//   //     },
//   //   ]
//   //   const menu = Menu.buildFromTemplate(template)
//   //   menu.popup(BrowserWindow.fromWebContents(event.sender))
//   // })

//   // ipcMain.on("savenewfile", (e, content) => {
//   //   createNewFile(content);
//   // });
//   // ipcMain.on("saveexistingfile", (e, { path, content }) => {
//   //   fs.writeFile(path, content, err => {
//   //     if (err) return;
//   //   });
//   // });

//   // function createNewFile(content) {
//   //   dialog
//   //     .showSaveDialog(mainWindow, {
//   //       title: "Create New File",
//   //       properties: ["showOverwriteConfirmation"],
//   //       filters: [
//   //         {
//   //           name: "Markdown Files",
//   //           extensions: ["md"],
//   //         },
//   //       ],
//   //     })
//   //     .then(({ canceled, filePath }) => {
//   //       if (canceled) return;

//   //       fs.writeFile(filePath, content, err => {
//   //         if (err) return;

//   //         toApp("fileopened", {
//   //           path: filePath,
//   //           content
//   //         });
//   //       });
//   //     });
//   // };

//   // function openFile(filters = [{ name: "All", extensions: ["*"] }]) {
//   //   const file = dialog.showOpenDialogSync(mainWindow, {
//   //     properties: ["openFile"],
//   //     filters: filters,
//   //     title: 'Ayy',
//   //     message: 'test message'
//   //   });

//   //   if (file) {
//   //     fs.readFile(file[0], "utf8", (err, data) => {
//   //       if (err) return;

//   //       toApp("fileopened", {
//   //         path: file[0],
//   //         content: data,
//   //       });
//   //     });
//   //   }
//   // };
// })

// app.on("window-all-closed", () => {
//   app.quit()
// })

// const toApp = (channel, args): void => mainWindow.webContents.send(channel, args)
// module.exports = toApp
export const toApp = (channel: string, ...args: any[]) => mainWindow?.webContents.send(channel, args)

// ipcMain.handle("displayMessage", text => dialog.showMessageBox(text))

const os = require("os")
ipcMain.on("main", (e, args) => {
  if (args === "getOS") e.reply("main", { id: "os", data: os.hostname() })
  else {
    toApp("main", args)
    // fs.readFile("path/to/file", (error, data) => {
    //   // Do something with file contents

    //   // Send result back to renderer process
    //   toApp('main', {data, error});
    // });
  }
})

ipcMain.on("getScreens", () => {
  // e, args
  desktopCapturer.getSources({ types: ["window", "screen"] }).then(async (sources) => {
    try {
      const screens: any[] = []
      sources.map((source) => screens.push({ name: source.name, id: source.id }))
      toApp("getScreens", screens)

      // const videoOptionsMenu = Menu.buildFromTemplate(
      //   sources.map(source => {
      //     return {
      //       label: source.name,
      //       click: () => toApp('getScreens', source)
      //     }
      //   })
      // );

      // videoOptionsMenu.popup();
    } catch (e) {
      console.error("Error:", e)
    }
  })
})

ipcMain.on("openFile", (_e, args) => {
  // toApp('main', args);

  if (!args.filters) args.filters = [{ name: "All", extensions: ["*"] }]
  if (!args.title) args.title = "Test"

  let file
  file = dialog.showOpenDialogSync(mainWindow!, {
    properties: ["openFile"],
    filters: args.filters,
    title: args.title,
  })

  if (file) {
    toApp("main", file)
    // server(file);
    // toApp("openFile", {
    //   path: chunk(file),
    //   // content: data,
    // });
    // toApp('openFile', "./video");
    toApp("openFile", file)
    // fs.readFile(file[0], "utf8", (err, data) => {
    //   toApp('main', err);
    //   toApp('main', data);
    //   if (err) return;

    //   toApp("openFile", {
    //     path: chunk(path),
    //     // content: data,
    //   });

    //   // toApp("openFile", {
    //   //   path: file[0],
    //   //   // content: data,
    //   // });
    // });
  }
  // fs.readFile(args.path, (error, data) => {
  //   // Do something with file contents

  //   // Send result back to renderer process
  //   toApp("openedFile", {data, error});
  // });
})

// server
// express.use(express.static(path.join(__dirname, 'public')))

// express.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.htm'))
// })

// function server(path: string) {
//   // express.get("/video", function (req, res) {
//   //   const stat = fs.statSync(path)
//   //   const fileSize = stat.size
//   //   const range = req.headers.range
//   //   if (range) {
//   //     const parts = range.replace(/bytes=/, "").split("-")
//   //     const start = parseInt(parts[0], 10)
//   //     const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
//   //     if (start >= fileSize) {
//   //       res.status(416).send("Requested range not satisfiable\n" + start + " >= " + fileSize)
//   //       return
//   //     }
//   //     const chunksize = end - start + 1
//   //     const file = fs.createReadStream(path, { start, end })
//   //     const head = {
//   //       "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//   //       "Accept-Ranges": "bytes",
//   //       "Content-Length": chunksize,
//   //       "Content-Type": "video/mp4",
//   //     }
//   //     res.writeHead(206, head)
//   //     file.pipe(res)
//   //   } else {
//   //     const head = {
//   //       "Content-Length": fileSize,
//   //       "Content-Type": "video/mp4",
//   //     }
//   //     res.writeHead(200, head)
//   //     fs.createReadStream(path).pipe(res)
//   //   }
//   // })
// }

// express.listen(3000, function () {
//   console.log('Listening on port 3000!')
// })

// function chunk(path) {
//   const stat = fs.statSync(path)
//   const fileSize = stat.size
//   const range = req.headers.range

//   if (range) {
//     const parts = range.replace(/bytes=/, "").split("-")
//     const start = parseInt(parts[0], 10)
//     const end = parts[1]
//       ? parseInt(parts[1], 10)
//       : fileSize-1

//     if(start >= fileSize) {
//       res.status(416).send('Requested range not satisfiable\n'+start+' >= '+fileSize);
//       return
//     }

//     const chunksize = (end-start)+1
//     const file = fs.createReadStream(path, {start, end})
//     const head = {
//       'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': chunksize,
//       'Content-Type': 'video/mp4',
//     }

//     // res.writeHead(206, head)
//     // file.pipe(res)
//     return file
//   } else {
//     const head = {
//       'Content-Length': fileSize,
//       'Content-Type': 'video/mp4',
//     }
//     // res.writeHead(200, head)
//     // fs.createReadStream(path).pipe(res)
//     return fs.createReadStream(path)
//   }
// }