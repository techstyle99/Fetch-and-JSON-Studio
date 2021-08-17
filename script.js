// TODO: add code here


window.addEventListener('load', function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
        response.json().then(json => {
            // debugger; 
            // console.log(json);

            // functional programming (for loop)


            const container = document.getElementById('container');
            container.addEventListener('click', () => {
                json.forEach(data => {
                    // object destructuring
                    const {
                        active,
                        firstName,
                        hoursInSpace,
                        id,
                        lastName,
                        picture, 
                        skills
                    } = data;       // where these data item came from

                    container.innerHTML += `
                        <div class="astronaut">
                        <div class="bio">
                            <h3>${firstName} ${lastName}</h3>
                            <ul>
                                <li>Hours in space: ${hoursInSpace}</li>
                                <li>Active: ${active}</li>
                                <li>Skills: ${skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${picture}">
                        </div>
                 `;
                });


            });

        });
    });

})