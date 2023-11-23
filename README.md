-Backend Airbnb
    -MongoDB Connection
    -User Schema Create
    -Error Handler To Handle Errors Which Occurs During APIs Request

    -USER APIs
      -Register API
       -Get Data From Post Request
         -Check Data Is Properly Filled Or Not
       -Install bcrypt
         -To Hash/Encrypt The Password
       -Save Data In Database Using User Schema  
       -Install jwt
         -To Genrate Auth Token By Taking User ID
       -Cookies from next/headers
         -To Save Cookies  For 15 Days
       -Response User Data     
     -Login API
       -Get Data From Post Request
         -Check Data Is Properly Filled Or Not
       -Find User Through Email(unique) In Database User Schema 
       -Used Bcrypt To Compare Password 
       -Used JWT Genrate Auth Token By Taking User ID
       -Cookies from next/headers
          -To Save Cookies 
       -Response User Data   
     -About Me API
       -Create A MiddleWare To AuthUser
         -Get JWT Token From Saved Cookies
         -Verify User Using JWT Verify Method
         -If User Is Verified Return User Else Error Handler Error Provided
       -Response According To Data and Response Data  
          


<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
