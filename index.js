async function createNFTContract(){

    const apiKey = document.getElementById("apiKey1").value;
    const contractName = document.getElementById("contractName").value;
    const shortName = document.getElementById("shortName").value;

    
    const createNFTObject = {
        "key":apiKey,
        "chain_id":97,
        "name":contractName,
        "short_name":shortName
    }

    const createNFTJSON = JSON.stringify(createNFTObject);

    console.log(createNFTObject);
    console.log(createNFTJSON);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '19099ee593msh7c92a7228c5c579p1102d2jsn50652ebee731',
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        body: createNFTJSON
    };

    try{
        const response = await fetch('https://thentic.p.rapidapi.com/nfts/contract', options);
        const data = await response.json();

        console.log(response);
        console.log(data);

        const wnd = window.open(data.transaction_url);
        setTimeout(function(){
            wnd.close();
        }, 1000);

    }catch(error){
        console.error(error);
    }
}

let nftID = 1;
async function mintNFT(){
    const apiKey = document.getElementById("apiKey2").value;
    const contractAddress = document.getElementById("contractAddress").value;
    const nftData = document.getElementById("nftData").value;
    const walletAddress = document.getElementById("walletAddress").value;
    

    const mintNFTObject = {
        "key":apiKey,
        "chain_id":97,
        "contract":contractAddress, 
        "nft_id":nftID,
        "nft_data":nftData,
        "to":walletAddress
    }
    const mintNFTJSON = JSON.stringify(mintNFTObject);
    console.log(mintNFTObject);
    console.log(mintNFTJSON);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '19099ee593msh7c92a7228c5c579p1102d2jsn50652ebee731',
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        body: mintNFTJSON
    };
    
    try{
        const response = await fetch('https://thentic.p.rapidapi.com/nfts/mint', options);
        const data = await response.json();

        console.log(response);
        console.log(data);

        const wnd = window.open(data.transaction_url);
        setTimeout(function(){
            wnd.close();
        }, 1000);

    }catch(error){
        console.error(error);
    }
    // fetch('https://thentic.p.rapidapi.com/nfts/mint', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    nftID ++;
}

async function transferNFT(){
    const apiKey = document.getElementById("apiKey3").value;
    const contractAddress = document.getElementById("contractAddress").value;
    const nftId = document.getElementById("nftId").value;
    const fromWalletAddress = document.getElementById("fromWalletAddress").value;
    const toWalletAddress = document.getElementById("toWalletAddress").value;

    const transferNFTObject = {
        "key":apiKey,
        "chain_id":97,
        "contract":contractAddress,
        "nft_id":nftId,
        "from":fromWalletAddress,
        "to":toWalletAddress
    }
    const transferNFTJSON = JSON.stringify(transferNFTObject);

    console.log(transferNFTObject);
    console.log(transferNFTJSON);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '19099ee593msh7c92a7228c5c579p1102d2jsn50652ebee731',
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        body: transferNFTJSON
    };

    try{
        const response = await fetch('https://thentic.p.rapidapi.com/nfts/transfer', options);
        const data = await response.json();

        console.log(response);
        console.log(data);

        const wnd = window.open(data.transaction_url);
        setTimeout(function(){
            wnd.close();
        }, 1000)
    }catch(error){
        console.error(error);
    }
    
    // fetch('https://thentic.p.rapidapi.com/nfts/transfer', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
}