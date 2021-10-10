import { ethers } from 'ethers'
import { contractAddress, contractAbi } from '../modules/config'

export const encryptData = (data) => {
  // return encrypted Data
  const encyrptedData = data
  return Promise.resolve(encyrptedData)
}

export const storeData = (encryptedData) => {
  // store data and return the URI/CID
  const uri = 'fg00r68o73f08cjp6av7124'
  return Promise.resolve(uri)
}

export const mintNFT = (pubKey, signature, dataURI) => {
  // mint NFT and return an ID/address
  // const { contract } = initContract()
  
  const nft = 'NFT_Address'
  return Promise.resolve(nft)
}

export const initContract = () => {
  if(!window.ethereum) {
    console.log('Metamask is required')
    return null
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  // https://docs.ethers.io/v5/getting-started/#getting-started--contracts
  return {
    contract: new ethers.Contract(contractAddress, contractAbi, provider),
    provider,
    signer
  }
}