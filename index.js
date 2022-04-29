async function findUsers() {
    const response = await fetch('users.json');
    const data = await response.json();
    return data;
}

findUsers().then(data => {
    const testUser = data[0];
    const userDiv = getUserDiv(data);

    document.querySelector('main').innerHTML = userDiv;
})

function getUserDiv(users) {
    let html = '';

    console.log(users);
    users.map(user => {
    html +=
    `
    <div class="user-container">
        <div class="user">
            <p class="user-name">${user.username}</p>
            <div class="user-online"></div>
        </div>
    </div>
    `;
})
    return html;

    // return `
    // <div class="user-container">
    //     <div class="user">
    //         <p class="user-name">${users.username}</p>
    //         <div class="user-online"></div>
    //     </div>
    // </div>
    // `
}