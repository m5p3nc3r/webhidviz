class HIDSelector {
    public static select = async () => {
        let device;
        try {
            let devices = await navigator.hid.requestDevice({filters:[]});
    
            device = devices[0];
        } catch (error) {
            console.log("An error occurred.");
        }
    
        if (!device) {
            console.log("No device was selected.");
        } else {
            document.body.innerHTML += "<hid-device vendorid='" + device.vendorId + "' productid='" + device.productId + "'></hid-device>";
            // Could also be added like this
            //document.body.appendChild(new HIDDeviceView(device));
        }  
        console.log('done');      
    }
}

document.getElementById('request-hid-device')?.addEventListener(
    'click', HIDSelector.select
)
