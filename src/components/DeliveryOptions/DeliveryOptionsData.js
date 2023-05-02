export const deliveryOptionsData = [
  {
    id: 'pickupKyiv',
    name: 'Pickup in Kyiv',
    price: 'free',
    address: 'Billy Harrington st. 1.',
    workimgTime: 'Monday-Friday 9:00-18:00'
  },
  {
    id: 'courierKyiv',
    name: 'Courier in Kyiv',
    price: 'free',
    inputs: [
      {
        name: 'Address',
        id: '1',
        regex: /^[a-zA-Z ]{3,}$/
      }
    ]
  },
  {
    id: 'urgentKyiv',
    name: 'Urgent in Kyiv in one hour',
    price: '150',
    inputs: [
      {
        name: 'Address',
        id: '2',
        regex: /^[a-zA-Z ]{3,}$/
      }
    ]
  },
  {
    id: 'novaPoshta',
    name: 'NovaPoshta',
    price: 'free',
    inputs: [
      {
        name: 'City',
        id: '3',
        regex: /^[a-zA-Z ]{3,}$/
      },
      {
        name: 'Address',
        id: '4',
        regex: /^[a-zA-Z ]{3,}$/
      }
    ]
  },
  {
    id: 'ukrPoshta',
    name: 'UkrPoshta',
    price: 'free',
    inputs: [
      {
        name: 'City',
        id: '5',
        regex: /^[a-zA-Z ]{3,}$/
      },
      {
        name: 'Address',
        id: '6',
        regex: /^[a-zA-Z ]{3,}$/
      }
    ]
  }
];
