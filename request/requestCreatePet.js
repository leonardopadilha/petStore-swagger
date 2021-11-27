export const createPet = (id, typePet, namePet, urlPhoto, nameTag, statusPet) => {
    return {
        "id": id,
        "category": {
            "id": id,
            "name": typePet,
        },
        "name": namePet,
        "photoUrls": [
            urlPhoto
        ],
        "tags": [{
            "id": id,
            "name": nameTag
        }],
        "status": statusPet
    }
}