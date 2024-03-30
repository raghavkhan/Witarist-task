export const to24HexString = (id) => {
    let hexString = '';

    for (let i = 0; i < id.length; i++) {
        const hex = id.charCodeAt(i).toString(16);
        hexString += hex.length === 1 ? '0' + hex : hex;
    }

    while (hexString.length < 24) {
        hexString += '0';
    }

    return hexString;
};

