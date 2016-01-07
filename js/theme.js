simpleCart({
    checkout: { 
        type: "PayPal" , 
        email: "you@yours.com" 
    },
    cartStyle: "table",
    tax:        0.075,
    currency:   "USD",
    cartColumns: [	
    	{ view: "image", attr:"thumb", label:false },
        { attr: "name" , label: "Name" },
        { attr:"size", label:"Size"},
        { attr: "price" , label: "Price", view: 'currency' },
        { view: "decrement" , label: false },
        { attr: "quantity" , label: "Qty" },
        { view: "increment" , label: false },
        { attr: "total" , label: "SubTotal", view: 'currency' },
        { view: "remove" , text: "Remove" , label: false }
    ],
});