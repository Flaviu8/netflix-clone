export const getCommonVideos = async (URL) => { 
    const PUBLIC_NEXT_YOUTUBE_API_KEY = String(process.env.NEXT_PUBLIC_YOUTUBE_API_KEYYOUTUBE_API_KEY);
  
    try {
    const BASE_URL = 'https://youtube.googleapis.com/youtube/v3'
    
    
    const response = await fetch (`${BASE_URL}/${URL}&maxResults=25&key=${PUBLIC_NEXT_YOUTUBE_API_KEY}`);
  
    const data = await response.json();
     
    if (data.error) {
        console.error('Youtube API error', data.error);
        return[];
    }
  
    console.log ({ items: data.item});
    
    return data?.items.map((item) => {
        const id = item.id?.videoId || item.id;
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId,
        
        };
    });
  } catch(error) {
    console.error('Something went wrong with videos library', error);
    return;
  }
  };
  
  export const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&maxResults=25&q=${searchQuery}&type=video/`;
    return getCommonVideos(URL);
  };
  
  export const getPopularVideos = () => {
    const URL = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=RO/'
    return getCommonVideos(URL);
  
   }
  