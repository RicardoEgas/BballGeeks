import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PlayerSearch from '../components/PlayerSearch';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('PlayerSearch component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      players: {
        status: 'succeeded',
        error: null,
        data: [],
      },
    });
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PlayerSearch />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
