export const compareLinks = (a, b) => {
    const bySource = a.source.localeCompare(b.source);
    const byTarget = a.target.localeCompare(b.target);
    const byCategory = a.category.toString().localeCompare(b.category.toString());
    if (bySource !== 0) {
        return bySource;
    }
    if (byTarget !== 0) {
        return byTarget;
    }
    return byCategory;
};