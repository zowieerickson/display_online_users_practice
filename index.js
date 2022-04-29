async function findUsers() {
    const response = await fetch('users.json');
    const data = await response.json();
    return data;
}

findUsers().then(data => {
    const testUser = data[0];
    console.log(testUser);
    const html = `
    <div class="user-container">
        <div class="user">
            <p class="user-name">${testUser.username}</p>
            <div class="user-online"></div>
        </div>
    </div>
    `;

    document.querySelector('main').innerHTML = html;
})