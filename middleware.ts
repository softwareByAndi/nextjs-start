/* 
if you're wondering what this is... basically it's a way to apply
middleware to all routes in the project without having to manually
import it into each route file.
- in other words, this wraps the entire project in an auth check, 
  and will re-route the user to the sign-in page (auto-generated)
  if they try to access any page without being signed in.
*/

/*
Without a defined matcher, this one line applies the next-auth 
middleware to all routes to the entire project
*/
export { default } from "next-auth/middleware"

/*
Applies next-auth only to matching routes - can be regex or string
Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
*/
export const config = {
    matcher: ['/default-auth']
}