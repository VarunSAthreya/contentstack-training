const generateUniqueId = (config) => {
    const { prefix } = config;
    if (prefix) {
        return prefix + "-" + Math.random().toString(36).substring(2);
    }
    return Math.random().toString(36).substring(2);
};

export { generateUniqueId };
