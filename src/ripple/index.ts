import { Wallet } from "swtc-factory";
import { ICreateOptionsModel, IWalletModel } from "../model";

/**
 * check ripple secret is valid or not
 *
 * @param {string} secret
 * @returns {boolean} return true if valid
 */
const isValidSecret = (secret: string): boolean => {
    return Wallet.isValidSecret(secret, "xrp");
};

/**
 * check ripple address is valid or not
 *
 * @param {string} address
 * @returns {boolean} return true if valid
 */
const isValidAddress = (address: string): boolean => {
    return Wallet.isValidAddress(address, "xrp");
};

/**
 * get address with secret
 *
 * @param {string} secret
 * @returns {(string | null)} return address if valid, otherwise return null
 */
const getAddress = (secret: string): string | null => {
    try {
        const wallet = Wallet.fromSecret(secret, "xrp");
        return wallet.address;
    } catch (error) {
        return null;
    }
};

/**
 * create ripple wallet
 *
 * @param {ICreateOptionsModel} opt
 * @returns {IWalletModel}
 */
const createWallet = (opt: ICreateOptionsModel): IWalletModel => {
    try {
        const wallet = Wallet.generate("xrp", opt);
        return wallet;
    } catch (error) {
        return null;
    }
};

export {
    isValidSecret,
    isValidAddress,
    getAddress,
    createWallet
};