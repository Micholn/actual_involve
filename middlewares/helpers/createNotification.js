const Notification = require("../../models/Notification");
const SocketMapping = require("../../models/SocketMapping");
const {dropRight} = require("lodash")
module.exports = async(io, adminId, notificationObj) => {
    //notify to the admin through socket.io
    //first save notification 
    let notificationObjOfAdmin = await Notification.findOne({ admin:adminId })
    if (!notificationObjOfAdmin) {
        // create new notification 
        notificationObjOfAdmin = new Notification({
            admin: adminId,
            notifications: [notificationObj],
            noOfUnseen: 1
        })
        await notificationObjOfAdmin.save();
    } else {
        let notifications = notificationObjOfAdmin.notofications
        notifications.unshift(notificationObj)
        notificationObjOfAdmin.noOfUnseen += 1 
        if (notificationObjOfAdmin.noOfUnseen < 20 && notifications.length > 20) {
            notificationObjOfAdmin.notifications = dropRight(notifications, )
        }
    }
}