class FetchManager{
    static async postData(url="", data={}) {
        const request = await fetch(url, {
            method: "POST",
            mode: "same-origin", 
            cache: 'no-cache',
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        },);
    }
}

export default FetchManager