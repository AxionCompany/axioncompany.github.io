const GIT_API ="https://api.github.com/orgs/axioncompany"
export default function gitApi(path) {

    fetch(`${GIT_API}/${path}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.github.v3+json"
        }
    });
};