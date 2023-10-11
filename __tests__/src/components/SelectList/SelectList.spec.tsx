import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";
import { dataMock, onChangeMock, onPressMock } from "./__mock__/SelectList.mock";

describe('Component: SelectList', () => {
  it('should be return city details selected correctly', () => {
    render(
      <SelectList
        data={dataMock}
        onChange={onChangeMock}
        onPress={onPressMock}
      />
    );

    const selectedCity = screen.getByText('Maracanaú');
    fireEvent.press(selectedCity);

    expect(onPressMock).toBeCalledTimes(1);
    expect(onPressMock).toBeCalledWith(dataMock[0]);
  });

  it('not should be show options when data props is empty', () => {
    render(
      <SelectList
        data={[]}
        onChange={onChangeMock}
        onPress={onPressMock}
      />
    );

    const options = screen.getByTestId('options');

    expect(options.children).toHaveLength(0);
  })
})