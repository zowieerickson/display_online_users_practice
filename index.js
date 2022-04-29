async function findUsers() {
    const response = await fetch('users.json');
    const data = await response.json();
    return data;
}

findUsers().then(data => {
    const testUser = data[0];
    const userDiv = getUserDiv(data);

    document.querySelector('.user-container').innerHTML = userDiv;
})

function getUserDiv(users) {
    let html = '';

    users.map(user => {
        html += `
            <div class="user">
                <p class="user-name">${user.username}</p>
                <div class="user-online"></div>
            </div>`;
    })
    return html;
}