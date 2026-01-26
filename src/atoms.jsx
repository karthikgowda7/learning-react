import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key : "asyncData",
        get : async ()=>{
            const res = await axios.get("http://localhost:3000/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})