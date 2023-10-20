import { mockWeatherAPIResponse } from "@__tests__/__mocks__/mockWeatherAPIResponse"
import { api } from "@services/api"
import { getWeatherByCityService } from "@services/getWeatherByCityService";

describe('Service: getWeatherByCityService', () => {
  it('should be return weather api data formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 });
    
    expect(response).toHaveProperty('today');
  })
})