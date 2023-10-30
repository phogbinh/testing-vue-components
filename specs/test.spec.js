import { mount, shallowMount } from '@vue/test-utils';
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

test('ListComponent Shallow', () => {
  console.log(mount(List).html());
  console.log(shallowMount(List).html());
});
