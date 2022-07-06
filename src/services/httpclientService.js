export const obterListaCriptos = async () => {
    try {
        let response = await fetch(`https://62ba733f7bdbe01d52896333.mockapi.io/coin/coin/`);
        return response.json();
    } catch(error) {
        console.log(error);
        return error;
    }
}

export const obterCripto = async (id) => {
    try {
        let response = await fetch(`https://62ba733f7bdbe01d52896333.mockapi.io/coin/coin/${id}`);
        return response.json();
    } catch(error) {
        console.log(error);
        return error;
    }
}