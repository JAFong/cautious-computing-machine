# Design Doc

## Public Lead Page

Opted to use JSON Forms since this was preferred in the exercise prompt and provides validation out of the box.
More work would be needed to create custom renderers to tune styling. Given the scope of this exercise I decided to focus on functionality of the form.

Form validation happens automatically because of JSON Forms. Additional form level validation is added when clicking the `Submit` button. Form level validation is also added for file uploading since the is outside JSON Forms. Upon clicking `Submit`, the application makes a `POST` request to `submitLeads` with the form data and uploaded file attached.

## Private Leads List UI

This page uses a naive solution for Auth, storing a value in sessionStorage if the user is "authenticated". Ideally we could store the value in a cookie with a token
to authenticate each request. For the purpose of this exercise, auth was needed to block the UI and restrict the API call.

I explored using AG Grid or TanStack Table when building out the table. I initially used TanStack Table but the initial setup was more convoluted so I opted for AG Grid
because it was more simple to set up with minimal code while also providing filtering, sorting, and cell customization.

I created a `zustand` store to isolate work with the server data. In `fetchLeads` I normalize the data by storing the list of leads by the leads `id`. This allows me to
update the individual lead within the `reachOutToLead` action within the `zustand` store. Within `my-app/app/list/components/LeadsTable.tsx` I denormalize the data within `useEffect` to render the table.
