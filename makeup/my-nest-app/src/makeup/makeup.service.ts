import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MakeupService {
  private makeup = [
    {
      id: 1,
      name: 'Matte Lipstick',
      brand: 'Maybelline',
      type: 'Lipstick',
      price: 12.99,
      shade: 'Red Velvet',
    },
    {
      id: 2,
      name: 'Liquid Foundation',
      brand: "L'Oreal",
      type: 'Foundation',
      price: 19.5,
      shade: 'Beige 220',
    },
    {
      id: 3,
      name: 'Volumizing Mascara',
      brand: 'Benefit',
      type: 'Mascara',
      price: 24.0,
      shade: 'Black',
    },
    {
      id: 4,
      name: 'Eyeshadow Palette',
      brand: 'Urban Decay',
      type: 'Eyeshadow',
      price: 39.99,
      shade: 'Naked Heat',
    },
    {
      id: 5,
      name: 'Blush Compact',
      brand: 'NARS',
      type: 'Blush',
      price: 29.0,
      shade: 'Orgasm',
    },
    {
      id: 6,
      name: 'Concealer Stick',
      brand: 'Maybelline',
      type: 'Concealer',
      price: 8.99,
      shade: 'Light',
    },
    {
      id: 7,
      name: 'Highlighter',
      brand: 'Fenty Beauty',
      type: 'Highlighter',
      price: 35.0,
      shade: 'Mean Money/Hu$tla Baby',
    },
    {
      id: 8,
      name: 'Setting Spray',
      brand: 'Urban Decay',
      type: 'Setting Spray',
      price: 33.0,
      shade: 'All Nighter',
    },
    {
      id: 9,
      name: 'Cream Blush',
      brand: 'Glossier',
      type: 'Blush',
      price: 18.0,
      shade: 'Beam',
    },
    {
      id: 10,
      name: 'Brow Pencil',
      brand: 'Anastasia Beverly Hills',
      type: 'Eyebrow',
      price: 23.0,
      shade: 'Medium Brown',
    },
    {
      id: 11,
      name: 'Liquid Lipstick',
      brand: 'Huda Beauty',
      type: 'Lipstick',
      price: 20.0,
      shade: 'Trendsetter',
    },
    {
      id: 12,
      name: 'Compact Powder',
      brand: 'MAC',
      type: 'Powder',
      price: 25.0,
      shade: 'NC20',
    },
    {
      id: 13,
      name: 'Gel Eyeliner',
      brand: 'Bobbi Brown',
      type: 'Eyeliner',
      price: 22.0,
      shade: 'Black Ink',
    },
    {
      id: 14,
      name: 'Lip Gloss',
      brand: 'NYX',
      type: 'Lip Gloss',
      price: 7.0,
      shade: 'Bare With Me',
    },
    {
      id: 15,
      name: 'Matte Lipstick',
      brand: 'Revlon',
      type: 'Lipstick',
      price: 10.5,
      shade: 'Cherries in the Snow',
    },
    {
      id: 16,
      name: 'BB Cream',
      brand: 'Garnier',
      type: 'Foundation',
      price: 14.0,
      shade: 'Light/Medium',
    },
    {
      id: 17,
      name: 'Shimmer Eyeshadow',
      brand: 'Too Faced',
      type: 'Eyeshadow',
      price: 30.0,
      shade: 'Chocolate Gold',
    },
    {
      id: 18,
      name: 'Contour Kit',
      brand: 'Kat Von D',
      type: 'Contour',
      price: 45.0,
      shade: 'Light',
    },
    {
      id: 19,
      name: 'Liquid Eyeliner',
      brand: 'Stila',
      type: 'Eyeliner',
      price: 22.0,
      shade: 'Intense Black',
    },
    {
      id: 20,
      name: 'Lip Balm',
      brand: "Burt's Bees",
      type: 'Lip Care',
      price: 5.0,
      shade: 'Original',
    },
  ];

  getAllProducts() {
    return this.makeup;
  }

  getProductsById(id: number) {
    const book = this.makeup.find((product) => product.id === id);
    if (!book) {
      throw new NotFoundException(`This product is nto available here`);
    }
    return book;
  }

  addProducts(product: {
    id: number;
    name: string;
    brand: string;
    type: string;
    price: number;
    shade: string;
  }) {
    this.makeup.push(product);

    return product;
  }

  deleteProduct(id: number) {
    const product = this.makeup.find((item) => item.id === id);
    if (!product) throw new Error('Product is not available');

    this.makeup = this.makeup.filter((item) => item.id !== id);
    return product;
  }
}
