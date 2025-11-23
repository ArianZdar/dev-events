import posthog from 'posthog-js'

posthog.init('phc_HRj0yyUOUFBwwlnYlJgiVEcylPkxjl5FCIbLW0sH19w', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-05-24',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
})