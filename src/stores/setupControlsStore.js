const setupControlsStore = (set) => ({
    collectionLength: 10,
    setCollectionLength: (length) => set({ collectionLength: length }),

    sort: undefined,
    setSort: (sort) => set({ sort })
});

export default setupControlsStore;
