export default {
/**
   * @description Get todo by id
   * @route GET todos/:id
   */
details: async (
    { request, response }: { request: { ip: string }; response: any },
  ) => {
    const ip =request.ip
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=775c5318c1fd479697017eb228ff9ef7&ip=${ip}`;
    const data = await fetch(url);
    
    response.body = JSON.parse(await data.text())}
}