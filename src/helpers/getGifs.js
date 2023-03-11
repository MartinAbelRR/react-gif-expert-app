export const getGifs = async ( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J2jMJATXLbonR1Z1tVD4el1qO7CR4lDC&q=${ category }&limit=10`;
    const peticion = await fetch( url );
    const { data } = await peticion.json();
    
    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }))

    return gifs;
}