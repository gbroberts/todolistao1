

const dataFetcher = async function(url=null){
    
    const response = await fetch(url);
    const todoJSON = await response.json();
    
    return todoJSON;
};

export {dataFetcher};