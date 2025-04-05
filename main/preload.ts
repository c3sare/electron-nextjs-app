import { contextBridge, ipcRenderer } from "electron";

const handler = {
  getUsers() {
    return ipcRenderer.invoke("get-users");
  },
  addUser(data) {
    return ipcRenderer.invoke("add-user", data);
  },
  send(channel, value) {
    ipcRenderer.send(channel, value);
  },
  on(channel, callback) {
    const subscription = (_event, ...args) => callback(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
};

contextBridge.exposeInMainWorld("ipc", handler);
