import { mount } from '@vue/test-utils';
import TestComponent from '@/test.vue';
import List from '@/list.vue';

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    'propsData': {
      'value': 'VueSchool'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('ListComponent', async () => {
  const wrapper = mount(List);
  const movies = wrapper['vm']['marvelMovies'];
  await wrapper.setData({
    'marvelMovies': [...movies, 'Endgame']
  });
  expect(wrapper.html()).toMatchSnapshot();
});
