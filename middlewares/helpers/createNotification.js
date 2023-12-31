const Notification = require("../../models/Notification");
const SocketMapping = require("../../models/SocketMapping");
const (dropRight) = require("lodash")
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
        await notificationObjOfAdmin.save
    }
}