window.addEventListener("message", handleReceivedMessage, false);

var buttonFromChild = document.getElementById('buttonFromChild');

function handleReceivedMessage(_e) {
	try {
		if(_e.origin != "file://") {
			return
		}
		console.log(_e.data)
		var messageTxt = document.createElement('div')
		messageTxt.innerText =  _e.data;
		document.getElementById('receivedMessageChild').appendChild(messageTxt)

	} catch(err){ 
		console.log('handleReceivedMessage: ' + err)
	}
}

function sendMessageToParentFrame(_e) {
	try{
		window.parent.postMessage("test message from child", "file://")
	} catch(err) {
		console.log('sendMessageToParentFrame: ' + err);
	}
}

buttonFromChild.onclick = sendMessageToParentFrame;

