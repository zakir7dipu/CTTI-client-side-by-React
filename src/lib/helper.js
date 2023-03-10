import "./config";

const basePath = global.config.base_path
function useInternalLink(path) {
    // console.log(basePath + path)
    return basePath + path
}

const currencyFormat = (price) => {
    return (price).toLocaleString('bd-TK', {
        style: 'currency',
        currency: 'BDT'
    });
}

const goToExternalLink = (path) => {
    window.open(path, '_blank');
}

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


export {
    useInternalLink,
    currencyFormat,
    goToExternalLink,
    uid
}