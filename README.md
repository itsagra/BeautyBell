# Test summary

## Page Login

Requirement:

1. Authentication with Facebook and Google account should be implemented.
2. Login form only mockup, no need to request API to do authentication.
3. If the user authenticate with FB or Google or user click Sign In button it will go to Home page.

#### Conclusion:

1. Google sign in is failed to implemented cause authentication error on google. Also mock login for manual email failed to implemented cause I'm new to nextjs tbh.
2. You can still login by facebook just visit `/login` page.
3. After login failed to redirect.

## Page Home

1. Navigation Bar has a title page and search bar, when the search bar is clicked it will search for a name from a list.
2. API List of artisan
3. When user click the lists, the application will redirect to “Detail Artisan”, and request API detail artisan
   Detail page displays:

- User Profile the Artisan.
- Services from the Artisan

#### Conclusion

All should be implemented.

## Profile Page

1. Show image from login via social media (optional when having data)
2. Show basic information from login via social media: name, birthdate (optional when having data), and email.

#### Conclusion

1. Login should by `/login` with facebook then you will get your profile filled.

## Stacks

- NextJS (SSR)
- TailwindCSS
- next-auth
