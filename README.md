This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## setup
### github oauth key
in github, go to `settings >> developer settings >> new oauth app` and generate a new oauth app
- dev homepage url: `http://localhost:3000` 
- dev auth callback url: `http://localhost:3000/api/auth/callback/github`
copy the client key and generate a client secret. this will go in the `.env.local` file

### .env file
generate a random secret in the terminal. And name it `NEXTAUTH_SECRET`
``` bash
openssl rand -base64 32 # generates random secret
```
``` bash
# >> .env.local

# change url to current host domain / ip
# in my case, hosting the server behind a CGNAT using tailscale,
#     the http and port parts are required to properly redirect
#     during signin.

# comment out to default to localhost
NEXTAUTH_URL="http://leafpi.shrew-goblin.ts.net:3000"

NEXTAUTH_SECRET={the secret generated from openssl rand -base64 32}

GITHUB_SECRET={github client secret}
GITHUB_ID={github client id}
```

### update package.json
update the `-H domain` parts of `npm run dev` and `npm run start` sections in `package.json`

### update Dockerfile
if hosting using docker, update the dockerfile to include the `.env` values


## Deployment

### Docker Deployment
1. add environment variables to the Dockerfile
2. build container 
    - ( change `nextjs-docker` to the name of the docker container )
``` bash
docker build -t nextjs-docker .
```
3. run container 
``` bash
docker run -p 3000:3000 nextjs-docker
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
