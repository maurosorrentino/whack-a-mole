// defining element html
const form = document.getElementById("form");

// event listener when submitting form
form.addEventListener("submit", e => {

    // preventing default behavior
    e.preventDefault();

    // name of the user
    const login = form.elements.login.value;

    fetch(`https://api.github.com/users/${login}`)

        .then(response => response.json())

        .then(user => {
            
            // creating the img section
            const img = document.createElement("img");

            // creating figure tag
            const figure = document.createElement("figure");

            // adding pic to the img section
            img.src = user.avatar_url;
            
            // adding size of the img
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.marginTop = "20px";
            
            // creating website
            const website = document.createElement("a");
            website.href = user.blog;
            website.textContent = user.blog;

            // creating an h1 for the website
            const h1Website = document.createElement("h1");
            h1Website.textContent = `Website: `;
            h1Website.appendChild(website);
            
            // creating a p description
            const name = document.createElement("h1");
            name.textContent = `Name: ${user.name}`;

            // location
            const location = document.createElement("h1");
            location.textContent = `Location: ${user.location}`;

            // is hirable?
            const hire = document.createElement("h1");
            hire.textContent = `Is hireable?: ${user.hireable}`

            // defining element html where we append all the infos
            const divInfos = document.getElementById("infos");

            // empty results when searching for another user
            divInfos.innerHTML = "";

            // adding all the infos just created to the relative div
            divInfos.appendChild(figure);
            figure.appendChild(img);
            divInfos.appendChild(name);
            divInfos.appendChild(h1Website);
            divInfos.appendChild(location);
            divInfos.appendChild(hire);
            
            })
            
            .catch(err => {
                
                console.error(err.message);
                    
            });

});