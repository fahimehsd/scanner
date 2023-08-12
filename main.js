// When scan is successful fucntion will produce data
function onScanSuccess(qrCodeMessage) {
  document.getElementById("result").innerHTML =
    '<span class="result">' + qrCodeMessage + "</span>";
}

// When scan is unsuccessful fucntion will produce error message
function onScanError(errorMessage) {
  // Handle Scan Error
}

// Setting up Qr Scanner properties
var html5QrCodeScanner = new Html5QrcodeScanner("reader");

// in
html5QrCodeScanner.render(onScanSuccess, onScanError);
Html5Qrcode.getCameras()
  .then((devices) => {
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
    if (devices && devices.length) {
      var cameraId = devices[0].id;
      // .. use this to start scanning.
    }
  })
  .catch((err) => {
    // handle err
  });

html5QrCode
  .start(
    cameraId, // retreived in the previous step.
    {
      fps: 10, // sets the framerate to 10 frame per second
      qrbox: 250 // sets only 250 X 250 region of viewfinder to
      // scannable, rest shaded.
    },
    (qrCodeMessage) => {
      // do something when code is read. For example:
      console.log(`QR Code detected: ${qrCodeMessage}`);
    },
    (errorMessage) => {
      // parse error, ideally ignore it. For example:
      console.log(`QR Code no longer in front of camera.`);
    }
  )
  .catch((err) => {
    // Start failed, handle it. For example,
    console.log(`Unable to start scanning, error: ${err}`);
  });
