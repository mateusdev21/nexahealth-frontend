function capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
};

export function getPageTitle(text: string): string {
    const arr = text.split('/')
    const title = arr.join(' ')
    return capitalizeWords(title);
};