import { Product } from '../common/models/product.dto';

interface ReducerState {
  products: Product[],
}

const defaultState: ReducerState = {
  products: [
    {
      id: 1,
      image: 'some image path',
      name: 'Закладки "Спящая красавица"',
      shortDescription: '5 закладок',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever since
the 1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but also
the leap into electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets containing Lorem
Ipsum passages, and more recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum.`,
      price: 250,
    },
    {
      id: 2,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    {
      id: 3,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    {
      id: 4,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
  ],
};

function productReducer(state = defaultState, action: any): ReducerState {
  switch (action.type) {
    // case 'SET_PRODUCT_BY_ID':
    //   return { role: GUEST };
    default:
      return state;
  }
}

export default productReducer;
