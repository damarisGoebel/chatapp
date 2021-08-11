const token = process.env.REACT_APP_TOKEN

export async function getAllMessages() {
    const response = await fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=' + token, {
        method: 'GET'
    })
    .then(response => response.json())
    return response
}

export async function get10MessagesAfterTimestamp() {
    const response = await fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?
    since=1521096352339&limit=10&token=` + token, {
        method: 'GET'
    })
    .then(response => response.json())
    return response
}

export async function sendMessage(message: any) {
    const response = await fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '7NzzoC3M6sTy'
        },
        body: JSON.stringify(message)
    })
    return response.json()
}