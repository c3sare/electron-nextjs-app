import { ipcRenderer } from "electron";

export const databaseAPI = {
  getUsers: () => ipcRenderer.invoke("get-users"),
  getUserById: (id: number) => ipcRenderer.invoke("get-user-by-id", id),
};
