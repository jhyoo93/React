// Enum
enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
};

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
};

interface ClothingProduct extends Product {
  sizes: Size[];
}

let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[];
} = {
  id: 'c001',
  name: '블랙 후디',
  price: 129000,
  membersOnly: true,
  sizes: [Size.S, Size.M, Size.L, Size.XL],
};

/* const stock: {[id: string]: number} = {
  c001: 3,
  c002: 1,
};

const cart: string[] = [];

function addToCart(id: string, quantity: number = 1) {

  if(stock[id] < quantity) {
    return false;
  }

  stock[id] -= quantity;
  for (let i=0; i< quantity; i++){
    cart.push(id);
  }

  return true;
}

// rest 파라미터 타입지정
function addManyToCart(...ids: string[]) {
  for (const id of ids) {
    addToCart(id);
  }
} */

/* const product: any = {
  id: 'c001',
  name: '블랙 후디',
  price: 129000,
  membersOnly: true,
  sizes: ['M', 'L', 'XL'],
}; */

// as 키워드
/* const parsedProduct = JSON.parse(
  '{"name": "코드잇 토트백", "price": 23000}'
) as {
  name: string;
  price: number;
}; */

// 꺽새
/* const parsedProduct2 = <{
  name: string;
  price: number;
}>JSON.parse(
  '{"name": "코드잇 토트백", "price": 23000}'
  
); */

/* let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: 'c001',
  name: '블랙 후디',
  price: 129000,
  membersOnly: true,
  sizes: ['M', 'L', 'XL'],
};

if(product.membersOnly) {
  console.log('회원 전용 상품');
} else {
  console.log('일반 상품');
}

let field = 'field name';
let obj = {
  [field]: 'field value',
};

let stock: {
  [id: string]: number;
} = {
  c001: 3,
  c002: 0,
  c003: 1,
}; */

/* let itemName: string = '블랙후드';
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;

let num = 2/0;
let num2 = 0/0; */

/* const cart: string[] =[];
cart.push('c001');
cart.push('c001');
cart.push('c001');

const carts: string[][] = [
  ['c001', 'c002'],
  ['c003']
];

let mySize: [number, number] = [167, 28]
mySize = [168, 28]; */
