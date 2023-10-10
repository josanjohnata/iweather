import { getNextDays } from "@utils/getNextDays"

describe('getNextDays', () => {
  it('should return correctly the next five days', () => {
    const days = getNextDays();
    
    expect(days.length).toBe(5);
  })

  it('should return an error if not return the next five days', () => {
    const days = getNextDays();
    
    expect(days.length).not.toBe(3);
  })
})