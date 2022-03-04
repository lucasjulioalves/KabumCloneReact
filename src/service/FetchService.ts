class FetchService {

    fetch(url : string, options: any = {}) {
        return fetch(url, options);
    }
}

export default FetchService;