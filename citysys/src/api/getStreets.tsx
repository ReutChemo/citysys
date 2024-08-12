import axios from 'axios';

export const Streets = [] as any;

export const getStreets = async (cityName: string): Promise<string[]> => {
  try {
    await axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=32000&q={"שם_ישוב":"${cityName}"}`
      )
      .then((res) => {
        const { records } = res.data.result;
        
        Streets.push(records.filter((city: any) =>city !== null && city !== undefined).map((city: any)=> city["שם_רחוב"].trim()));
        console.log('cityName'+cityName);
        console.log('Streets'+Streets);
       
        return Streets;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
  return Streets;
};