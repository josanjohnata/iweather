import { api } from "@services/api"
import { getCityByNameService } from "@services/getCityByNameService";

import { dataMock } from "../../__mocks__/getCityByNameService.mock";

describe('Service: getCityByNameService', () => {
  it('should return city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: dataMock});

    const response = await getCityByNameService('São Paulo');
    expect(response.length).toBeGreaterThan(0);
  });
});