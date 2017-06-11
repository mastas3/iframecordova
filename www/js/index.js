window.addEventListener("message", handleReceivedMessage, false);

var buttonFromParent = document.getElementById('buttonFromParent');

function handleReceivedMessage(_e) {
	try {
		if(_e.origin != "file://") {
			return
		}
		console.log(_e.data)
		var messageTxt = document.createElement('div')
		messageTxt.innerText =  _e.data;
		document.getElementById('receivedMessageParent').appendChild(messageTxt)

	} catch(err){ 
		console.log('handleReceivedMessage: ' + err)
	}
}

function sendMessageToChildFrame(_e) {
	try{
		var iframe = document.getElementById('iframe').contentWindow;
		iframe.postMessage("test message from parent", "file://")
	} catch(err) {
		console.log('sendMessageToParentFrame: ' + err);
	}
}

buttonFromParent.onclick = sendMessageToChildFrame;

