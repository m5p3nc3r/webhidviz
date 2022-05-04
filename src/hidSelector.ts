import { HIDDeviceView } from "./views/hidDeviceView";

export class HIDSelector {

    public static select() {
        try {
            navigator.hid.requestDevice({filters:[]}).then((devices) => {
                let device = devices[0]
                if(device) {
                    document.body.appendChild(new HIDDeviceView(device));
//                    document.body.innerHTML += "<hid-device vendorid='" + device.vendorId + "' productid='" + device.productId + "'></hid-device>";

                }
            })
        } catch (error) {
            console.log("An error occurred.");
        }
    }
}
