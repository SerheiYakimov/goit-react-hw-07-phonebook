export const getContacts = state => state.contacts;
export const getFilter = state => state.filterReducer;
console.log(getContacts);




export const getAllContacts = state => {
    const contacts = getContacts(state);
    console.log(contacts);
    const filter = getFilter(state);
    console.log(filter);
    const normalizeFilter = filter.toLowerCase();
    if (filter.length > 0) {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizeFilter),
        );
    } else {
    return contacts;
    }
}

