export default class CommunicationController {
    static BASE_URL = 'https://develop.ewlab.di.unimi.it/mc/exercises/'; // URL base per le chiamate API
    static sid = 123; // session id

    static async genericRequest(endpoint, verb, queryParams , bodyParams ) {
        console.log("genericRequest called");

        const queryParamsFormatted = new URLSearchParams(queryParams).toString();

        const url = `${this.BASE_URL}${endpoint}?${queryParamsFormatted}`;
        
        console.log(`sending ${verb} request to: ${url}`);

        let fetchData = {
            method: verb,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        if (verb !== 'GET') {
            fetchData.body = JSON.stringify(bodyParams);
        }

        let httpsResponse = await fetch(url, fetchData);
        const status = httpsResponse.status;

        if (status === 200) {
            return await httpsResponse.text(); 
        } else {
            const message = await httpsResponse.text();
            let error = new Error("errore message from the server HTTP "+ message);
            throw error;
        }
    }

    static async getRequest(endpoint, queryParams ) {
        console.log("getRequest called");
        return await this.genericRequest(endpoint, 'GET', queryParams, {});
    }
}