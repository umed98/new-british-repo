# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!-- Test -->
{
  "created_by": 1,

  "customer_details": {
    "title": "Mr",
    "first_name": "John",
    "middle_name": "A.",
    "last_name": "Doe",
    "email": "john.doe8456576@example.com",
    "phone_number": "1234567890",
    "alternate_phone_number": "",
    "mobile_number": "0987654321",
    "alternate_mobile_number": "",
    "dob": "1985-06-15",
    "gender": "male",
    "comment": "Preferred customer",
    "billing_addresses": [
      {
        "address_line_1": "123 Main St",
        "address_line_2": "Apt 4B",
        "city": "Metropolis",
        "postal_code": "12345",
        "country": "USA"
      }
    ],
    "shipping_addresses": [
      {
        "address_line_1": "456 Side Ave",
        "address_line_2": "",
        "city": "Metropolis",
        "postal_code": "12345",
        "country": "USA"
      }
    ]
  },

  "business_details": {
    "business_name": "Acme Corp",
    "business_type": "Manufacturer",
    "business_category": "Textiles",
    "website": "https://acme.example.com",
    "b_phone_number": "1112223333",
    "b_mobile_number": "4445556666",
    "business_email": "sales@acme.example.com",
    "billing_addresses": [
      {
        "address_line_1": "789 Corporate Blvd",
        "address_line_2": "Suite 100",
        "city": "Gotham",
        "postal_code": "54321",
        "country": "USA"
      }
    ],
    "shipping_addresses": [
      {
        "address_line_1": "101 Warehouse Rd",
        "address_line_2": "",
        "city": "Gotham",
        "postal_code": "54321",
        "country": "USA"
      }
    ]
  },

  "payment_details": {
    "selected_methods": ["credit_card", "credit_days"],
    "credit_card": {
      "card_number": "4111111111111111",
      "card_type": "visa",
      "expiry_date": "2027-12",
      "cvv": "123"
    },
    "credit_days": {
      "days": 30
    }
  },

  "customer_special_pricing": [
    {
      "product_id": 1,
      "apply_to_all": true,
      "special_price": 75.00
    },
    {
      "product_id": 2,
      "apply_to_all": false,
      "variants": [
        {
          "id": 3,
          "special_price": 120.00,
          "meter_range_id": 2
        },
        {
          "id": 4,
          "special_price": 110.00
        }
      ]
    }
  ],

  "business_special_pricing": [
    {
      "product_id": 2,
      "apply_to_all": false,
      "variants": [
        {
          "id": 4,
          "special_price": 110.00
        }
      ]
    }
  ]
}

<!-- Test -->