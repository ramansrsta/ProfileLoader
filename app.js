fetch('https://api.github.com/users/ramansrsta')
.then(response => response.json())
.then(data => {
    document.getElementById('profileImage').src = data['avatar_url'];
    document.getElementById('profileName').textContent = data.name;
});

fetch('https://api.github.com/users/ramansrsta/repos?page=1&per_page=50')
.then(response => response.json())
.then(data => {
    let htmlOutput = "";
    data.forEach(dat => {
        htmlOutput += 
        `<div class="card-body mb-1">
            <div class="row">
                <div class="col-md-6">
                    <a href="${dat.html_url}" target="_blank">  ${dat.name} </a> 
                </div>
                <div class="col-md-6">
                    <span class="badge badge-secondary">Watchers : ${dat.watchers_count} </span> 
                    <span class="badge badge-success">Forks : ${dat.forks_count} </span> 
                </div>
            </div>
        </div>
    `;
    });
    document.getElementById('repo').innerHTML = htmlOutput;
}).catch(err => console.log(err));
