// const axios = require('axios')
async function getProducts(params) {
    let page = Number(params?.page) || 0;
    let limit = Number(params?.limit) || 100;
    //product list url
    const url = `https://dummyjson.com/products?page=${page}&limit=${limit}`

    // Make a GET request using the fetch API
    try {
        const response = await fetch(url, {method: 'GET'});
        const data = await response.json();
        
         return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getProducts
}