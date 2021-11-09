function capitalize(str) {
    const modStr = str.toLowerCase();
    return modStr.charAt(0).toUpperCase() + modStr.slice(1);
}

export default capitalize;
