import { ComboBox, Item } from '@react-spectrum/combobox';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from '@react-spectrum/provider';
import { defaultTheme } from '@adobe/react-spectrum';

const items = [
  { name: 'Aardvark', id: '1' },
  { name: 'Kangaroo', id: '2' },
  { name: 'Snake', id: '3' },
  { name: 'cow', id: '4' },
  { name: 'rat', id: '5' },
  { name: 'lion', id: '6' },
  { name: 'tiger', id: '7' },
  { name: 'elephant', id: '8' },
  { name: 'gerafee', id: '9' },
  { name: 'fox', id: '10' },
  { name: 'monkey', id: '11' },
  { name: 'Lizard', id: '12' },
  { name: 'Penguin', id: '13' },
  { name: 'Giraffe', id: '14' },
  { name: 'Hippo', id: '15' },
  { name: 'Dolphin', id: '16' },
  { name: 'Owl', id: '17' },
  { name: 'Eagle', id: '18' },
  { name: 'Panda', id: '19' },
  { name: 'Octopus', id: '20' },
  { name: 'Sloth', id: '21' },
  { name: 'Zebra', id: '22' },
  { name: 'Polar Bear', id: '23' },
  { name: 'Gorilla', id: '24' },
  { name: 'Koala', id: '25' },
  { name: 'Cheetah', id: '26' },
  { name: 'Rhino', id: '27' },
  { name: 'Penguin', id: '28' },
  { name: 'Jaguar', id: '29' },
  { name: 'Hedgehog', id: '30' },
  { name: 'Flamingo', id: '31' },
  { name: 'Orangutan', id: '32' },
  { name: 'Pangolin', id: '33' },
];

const meta = {
  title: 'Example/ComboBox',
  component: ComboBox,
  args: {
    label: 'Testing ComboBox',
    onOpenChange: action('onOpenChange'),
    onInputChange: action('onInputChange'),
    onSelectionChange: action('onSelectionChange'),
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dynamic: Story = {
  name: 'dynamic items',
  args: {
    label: 'Animals',
    defaultItems: items,
    children: (item: any) => <Item key={item.id}>{item.name}</Item>,
  },
  render: (args) => (
    <Provider theme={defaultTheme}>
      <ComboBox {...args} UNSAFE_className='overflow-y-auto'>
        {(item: any) => <Item key={item.id}>{item.name}</Item>}
      </ComboBox>
    </Provider>
  ),
};

export const Static: Story = {
  name: 'static items',
  args: {
    label: 'Animals',
    children: (item: any) => <Item key={item.id}>{item.name}</Item>,
  },
  render: (args) => <Provider theme={defaultTheme}>{render(args)}</Provider>,
};

function render(props = {}) {
  return (
    <ComboBox label='Combobox' {...props}>
      <Item key='one'>Item One</Item>
      <Item key='two' textValue='Item Two'>
        Item Two
      </Item>
      <Item key='three'>Item Three</Item>
      <Item key='3'>Item 3</Item>
      <Item key='4'>Item 4</Item>
      <Item key='5'>Item 5</Item>
      <Item key='6'>Item 6</Item>
      <Item key='7'>Item 7</Item>
      <Item key='8'>Item 8</Item>
      <Item key='9'>Item 9</Item>
      <Item key='10'>Item 10</Item>
      <Item key='11'>Item 11</Item>
      <Item key='12'>Item 12</Item>
      <Item key='13'>Item 13</Item>
      <Item key='14'>Item 14</Item>
      <Item key='15'>Item 15</Item>
      <Item key='16'>Item 16</Item>
      <Item key='17'>Item 17</Item>
      <Item key='18'>Item 18</Item>
      <Item key='19'>Item 19</Item>
      <Item key='20'>Item 20</Item>
      <Item key='21'>Item 21</Item>
      <Item key='22'>Item 22</Item>
      <Item key='23'>Item 23</Item>
      <Item key='24'>Item 24</Item>
      <Item key='25'>Item 25</Item>
      <Item key='26'>Item 26</Item>
      <Item key='27'>Item 27</Item>
      <Item key='28'>Item 28</Item>
      <Item key='29'>Item 29</Item>
      <Item key='30'>Item 30</Item>
    </ComboBox>
  );
}
