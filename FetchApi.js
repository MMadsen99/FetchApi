async function fetchApi() {

    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

    let response = await fetch(url);

    let commits = await response.json();

    alert(commits[0].author.login);

}
